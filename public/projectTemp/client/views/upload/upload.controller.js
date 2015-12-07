'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("UploadController", UploadController);

    function UploadController(PostService, AdsService, $rootScope, $location) {
        var model = this;
        model.add = add;
        model.postAd = postAd;

        $rootScope.$on('auth', function (user) {
            init();
        });

        function init() {
            if ($rootScope.user) {
                model.user = $rootScope.user;
                PostService.getAllPosts($rootScope.user._id)
                .then(function (posts) {
                    $rootScope.posts = posts;
                });
            };
        };

        init();

        function postAd(sd, ed, address, details) {
            if (sd > ed) {
                alert("Start cannot be before end");
            } else if (sd && ed && address && details) {
                var ad = {
                    "userId": $rootScope.user._id,
                    "postedBy": $rootScope.user.firstName + " " + $rootScope.user.lastName,
                    "postedOn": new Date(),
                    "from": sd,
                    "to": ed,
                    "address": address,
                    "details": details
                };

                AdsService.postAd(ad)
                    .then(function (newAd) {
                        alert("Your Ad was successfully posted");
                        $location.path("/myprofile");
                    });
            } else {
                alert("All fields need to be filled out in the ad section");
            };
        };

        function add(status) {
            var currUser = $rootScope.user._id;
            var newPost = {
                "created": new Date(),
                "content": status,
                "userId": currUser
            };
            PostService.addPost(currUser, newPost)
                .then(function (newPost) {
                    $location.path("/myprofile");
                });
        };
    };
})();