module.exports = function (app, Message) {
    app.get("/api/project/messages/:userid", getMessages);
    app.post("/api/project/user/chat", sendMessage);
    app.delete("/api/project/user/:uid/message/:mid", removeMsg);
    app.get("/api/project/user/messages/to/:uid/from/:pid", getmsgforperson);

    function getMessages(req, res) {
        var uid = req.params.userid;
        Message.getMessages(uid)
            .then(function (msgs) {
                res.json(msgs);
            });
    };

    function sendMessage(req, res) {
        var msg = req.body || {};
        Message.sendMsg(msg)
            .then(function (msg) {
                res.json(msg);
            });
    };

    function removeMsg(req, res) {
        var uid = req.params.uid;
        var mid = req.params.mid;
        Message.removeMsg(uid, mid)
            .then(function (msgs) {
                res.json(msgs);
            });
    };

    function getmsgforperson(req, res) {
        var uid = req.params.uid;
        var pid = req.params.pid;
        Message.getmsgforperson(uid, pid)
            .then(function (msgs) {
                res.json(msgs);
            });
    };
};