const mongoose = require('mongoose');
const Schema = mongoose.Schema;

'use strict';
const contentSchema = new Schema({
   
    title:{type:String},
    content: { type: String },
    image_url: {type : String},
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Content', contentSchema);