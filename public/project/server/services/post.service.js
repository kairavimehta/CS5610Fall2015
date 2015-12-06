module.exports = function (app, Post) {
    app.get("/api/project/post/user/:uid", getPosts);
    app.post("/api/project/user/:uid/post", addPost);
    app.delete("/api/project/user/:userId/post/:postId", removePost);

    function getPosts(req, res) {
        var uid = req.params.uid;
        Post.getPostsForUser(uid)
            .then(function (posts) {
                res.json(posts);
            });
    };

    function addPost(req, res) {
        var uid = req.params.uid;
        var post = req.body || {};
        Post.addPost(uid, post)
            .then(function (post) {
                res.json(post);
            });
    };

    function removePost(req, res) {
        var userId = req.params.userId;
        var postId = req.params.postId;
        Post.removePost(userId, postId)
            .then(function (posts) {
                res.json(posts);
            });
    };
};