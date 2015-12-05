//var model = require("../models/user.model.js")();
module.exports = function (app, User) {
    app.get("/api/project/user/:username/:password", findUser);
    app.post("/api/project/user", createUser);
    app.get("/api/project/user", findAll);
    app.get("/api/project/user/:id", findById);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user:id", deleteUser);
    app.get("/api/project/post/user/:uid", getPosts);
    app.post("/api/project/user/:uid/post", addPost);
    app.get("/api/project/network/user/:uid", getFriends);
    app.get("/api/project/users/:name", findUsers);
    app.get("/api/project/user/:userId/person/:personId", checkFriends);
    app.post("/api/project/user/:userId/add/:personId", addFriend);
    app.delete("/api/project/user/:userId/post/:postId", removePost);
    app.delete("/api/project/user/:userId/remove/:personId", removeFriend);
    app.post("/api/project/user/ad", postAd);
    app.get("/api/project/ads", getAds);
    app.post("/api/project/user/chat", sendMessage);
    app.get("/api/project/messages/:userid", getMessages);
    app.delete("/api/project/user/:uid/message/:mid", removeMsg);
    app.delete("/api/project/ad/:aid", removeAd);

    function removeAd(req, res) {
        //var uid = req.params.uid;
        var aid = req.params.aid;
        User.removeAd(aid)
            .then(function (ads) {
                res.json(ads);
            })
    }

    function removeMsg(req, res) {
        var uid = req.params.uid;
        var mid = req.params.mid;
        User.removeMsg(uid, mid)
            .then(function (msgs) {
                res.json(msgs);
            })
    }

    function getMessages(req, res) {
        var uid = req.params.userid;
        User.getMessages(uid)
            .then(function (msgs) {
                res.json(msgs);
            })
    }

    function sendMessage(req, res) {
        var msg = req.body || {};
        User.sendMsg(msg)
            .then(function (msg) {
                res.json(msg);
            })
    }

    function getAds(req,res) {
        User.getAllAds()
            .then(function (ads) {
                res.json(ads);
            });
    }

    function postAd(req, res) {
        var ad = req.body || {};
        User.postAd(ad)
            .then(function (ad) {
                res.json(ad);
            })
    }

    function removePost(req, res) {
        var userId = req.params.userId;
        var postId = req.params.postId;
        User.removePost(userId, postId)
            .then(function (posts) {
                res.json(posts);
            })
    }

    function removeFriend(req, res) {
        var userId = req.params.userId;
        var personId = req.params.personId;
        User.removeFriend(userId, personId)
            .then(function (friend) {
                res.json(friend);
            });
    }

    function addFriend(req, res) {
        var userId = req.params.userId;
        var personId = req.params.personId;
        User.addFriend(userId, personId)
            .then(function (friend) {
                res.json(friend);
            });
    }

    function checkFriends(req, res) {
        var userId = req.params.userId;
        var personId = req.params.personId;
        User.checkFriends(userId, personId)
            .then(function (friend) {
                res.json(friend);
            });
    }

    function findUsers(req, res) {
        var name = req.params.name;
        if (name) {
            var options = {};
            var username = name.split(" ");
            if (username.length >= 2) {
                options.firstName = { $regex: new RegExp(username[0],"i") };
                options.lastName = { $regex: new RegExp(username[1], "i") };
            }
            else {
                options.firstName = { $regex: new RegExp(username[0], "i") };
            }
            User.searchUser(options)
                .then(function (user) {
                    res.json(user);
                });
        }

    }

    function getFriends(req, res) {
        var uid = req.params.uid;
        User.getFriendsForUser(uid)
            .then(function (friends) {
                res.json(friends);
            })
    }

    function getPosts(req, res) {
        var uid = req.params.uid;
        User.getPostsForUser(uid)
            .then(function (posts) {
                res.json(posts);
            })
    }

    function addPost(req, res) {
        var uid = req.params.uid;
        var post = req.body || {};
        User.addPost(uid, post)
            .then(function (post) {
            res.json(post);
        });
    }

    function createUser(req, res) {
        var newUser = req.body;
        User.createUser(newUser)
            .then(function (user) {
                res.json(user);
            });
    }

    //function findAll(req, res) {
    //    var modelResponse;
    //    var uname = req.query.username;
    //    var pwd = req.query.password;
    //    if (uname != undefined && pwd != undefined) {
    //        modelResponse = findUserByCredentials(uname, pwd);
    //    }
    //    else if (uname != undefined) {
    //        modelResponse = findUserByUsername(uname);
    //    }
    //    else {
    //        modelResponse = model.findAll();
    //    }
    //    console.log(modelResponse);
    //    res.json(modelResponse);
    //}

    //function findUserByUsername(uname) {
    //    return model.findUserByUsername;
    //}

    //function findUserByCredentials(uname, pwd) {
    //    var credentials = {
    //        "username": uname,
    //        "password": pwd
    //    };
    //    return model.findUserByCredentials(credentials);
    //}

    function findUser(req, res) {
        var uname = req.params.username;
        var pwd = req.params.password;
        var credentials = { "userName": uname, "password": pwd }
        User.findUserByCredentials(credentials).then(function (user) {
            res.json(user);
        });
    }

    function findAll(req, res) {
        User.findAll()
            .then(function (users) {
                res.json(users);
            });
    }

    function findUserByUsername(req, res) {
        var uname = req.params.username;
        User.findUserByUsername(uname)
         .then(function (users) {
             res.json(users);
         });
    }

    function findById(req, res) {
        var id = req.params.id;
        User.findById(id)
         .then(function (users) {
             res.json(users);
         });
    }

    function updateUser(req, res) {
        var uid = req.params.id;
        var user = req.body;
        User.updateUser(uid, user)
            .then(function (user) {
                res.json(user);
            });
    }

    function deleteUser(req, res) {
        var uid = req.params.id;
        User.deleteUser(uid)
              .then(function (users) {
                  res.json(users);
              });

    }
};