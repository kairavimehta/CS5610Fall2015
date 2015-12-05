"use strict";
module.exports = function (app, mongoose, db) {

    var User = require("./models/user.model.js")(mongoose, db);

    require("./services/user.service.js")(app, User);

};