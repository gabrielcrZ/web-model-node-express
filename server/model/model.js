const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    clan: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const Shinobi_List = mongoose.model('shinobilist', schema);

module.exports = Shinobi_List;