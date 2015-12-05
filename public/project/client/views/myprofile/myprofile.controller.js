(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("MyProfileController", MyProfileController);


    function MyProfileController(UserService, $rootScope, $location) {
        var model = this;
        model.removePost = removePost;

        function init() {
            if ($rootScope.user) {
                model.name = $rootScope.user.firstName + " " + $rootScope.user.lastName;
                var currUser = $rootScope.user._id;
                UserService.getAllPosts(currUser)
                    .then(function (posts) {
                        model.posts = posts;
                    });
            }
            else {
                alert("login to access this page");
                $location.path("/login");
            }
        }
        init();

        function removePost(index) {
            var currUser = $rootScope.user._id;
            var index = model.posts.length - index - 1;
            UserService.removePost(currUser, model.posts[index]._id)
                .then(function (posts) {
                    model.posts = posts;
                });
        }
    }

})();