var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = mongoose.Schema({
    "created":{type: Date},
    "content": { type: String },
    //"image": { type: String },
    //"ads" : { type: String },
    "userId": { type: ObjectId, ref: "User" }
}, { collection: 'cs5610.project.posts' });
