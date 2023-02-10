var Shinobi_List = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if(!req.body) {
        req.status(400).send({message: 'Content can not be empty!'});
        return;
    }
    // new shinobi
    const shinobi = new Shinobi_List({
        name: req.body.name,
        clan: req.body.clan,
        rank: req.body.rank,
        status: req.body.status
    })
    // save to database
    shinobi
        .save(shinobi)
        .then(data => {
            //res.send(data)
            res.redirect('/add-shinobi');
        })
        .catch(err => {
            res.status(500).send({
                message:err.message
            });
        });

}
// retrieve and return all/a single shinobi

exports.find = (req, res) => {

    if(req.query.id) {
        const id = req.query.id;

        Shinobi_List.findById(id)
            .then(data => {
                if(!data) {
                    req.send(400).send({message: "Shinobi with id " +id +" not found"})
                } else {
                    res.send(data)
                }
            }) .catch (err =>{
                res.status(500).send({message: "Error while retrieving shinobi with id" +id})
            }) 

    } else {
        Shinobi_List.find()
            .then(shinobi => {
                res.send(shinobi)
            }) .catch(err => {
                res.status(500).send({message : err.message || "Error Occured while retriving information"})
            })
    }
}
// update shinobi by id
exports.update = (req, res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message : "Data can't be empty!"})
    }
    const id = req.params.id;
    Shinobi_List.findByIdAndUpdate(id, req.body)
        .then(data => {
            if(!data) {
                req.status(404).send({message : "Can't Update user"})
            } else {
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message : "Error on update!"})    
        })
}

// delete shinobi by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Shinobi_List.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(400).send({message: "Can't delete shinobi!"})
            } else {
                res.send({
                    message: "Shinobi deleted!"
                })
            }
        }) .catch (err => {
            res.status(500).send({message: "Could not delete shinobi with id:" + id});
        });
}