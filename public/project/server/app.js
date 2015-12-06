"use strict";
module.exports = function (app, mongoose, db) {

    var User = require("./models/user.model.js")(mongoose, db);
    var Ads = require("./models/ads.model.js")(mongoose, db);
    var Friends = require("./models/friends.model.js")(mongoose, db);
    var Message = require("./models/message.model.js")(mongoose, db);
    var Post = require("./models/post.model.js")(mongoose, db);

    require("./services/user.service.js")(app, User);
    require("./services/message.service.js")(app, Message);
    require("./services/post.service.js")(app, Post);
    require("./services/ads.service.js")(app, Ads);
    require("./services/friend.service.js")(app, Friends);
};