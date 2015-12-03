var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = mongoose.Schema({
    "person": { type: ObjectId, ref: "User" },
    "firstName":{ type:String},
    "lastName":{type:String},
    "friendOf": { type: ObjectId, ref: "User" }
}, { collection: 'cs5610.project.friend' });