var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = mongoose.Schema({
    "from": { type: ObjectId, ref: "User" },
    "fromUser": { type : String },
    "subject":{ type : String },
    "content": { type: String },
    "date": {type : Date},
    "to": { type: ObjectId, ref: "User" }
}, { collection: 'cs5610.project.messages' });
