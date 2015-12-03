var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = mongoose.Schema({
    "userId": { type: ObjectId, ref: "User" },
    "postedBy": { type: String },
    "postedOn": { type: Date },
    "from": { type: Date },
    "to": { type: Date },
    "address": { type: String },
    "details":{ type : String }
}, { collection: 'cs5610.project.ads' });
