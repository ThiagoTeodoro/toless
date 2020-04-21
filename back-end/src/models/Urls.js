//Imports
const mongoose = require('mongoose');

const UrlsSchema = new mongoose.Schema({
    hashReference: String,
    originalUrl: String,
    timestamp: Date,
}, { minimize: false });

module.exports = mongoose.model('urls', UrlsSchema);