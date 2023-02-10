const axios = require('axios')


exports.homeRoutes = (req,res) => {
    //Make a get request to /api/users
    axios.get('http://localhost:3000/api/shinobilist')
        .then(function(response){
            res.render('index',{shinobi: response.data});
        })
        .catch (err => {
            res.send(err)
        })
}

exports.add_shinobi = (req,res) => {
    res.render('add_shinobi');
}

exports.update_shinobi = (req,res) => {
    axios.get('http://localhost:3000/api/shinobilist', { params: {id : req.query.id}})
     .then(function(shinobidata) {
        res.render('update_shinobi', {shinobi : shinobidata.data})
     }) .catch (err => {
        res.send(err);
     })
}