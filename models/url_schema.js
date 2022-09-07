const mongoose = require('mongoose');
const url_list = new mongoose.Schema({
    orignal_url: {
        type: String,
        required: true
    },
    short_url: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('url_list', url_list);