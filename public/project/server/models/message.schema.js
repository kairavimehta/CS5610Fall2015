var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.types.ObjectId;
module.exports = mongoose.Schema({
    "from": { type: ObjectId, ref: "User" },
    "content": { type: String },
    "date": {type : Date},
    "to": { type: ObjectId, ref: "User" }
}, { collection: 'cs5610.project.messages' });
