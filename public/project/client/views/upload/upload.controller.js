(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("UploadController", UploadController);

    function UploadController(UserService, $rootScope, $location) {
        var model = this;
        model.add = add;
        model.postAd = postAd;
        var currUser = $rootScope.user._id;

        function init() {
            UserService.getAllPosts(currUser)
                .then(function (posts) {
                    $rootScope.posts = posts;
                });
        }
        init();

        function postAd(sd, ed, address, details) {
            if (sd > ed) {
                alert("Start cannot be before end");
            }
            else if (sd && ed && address && details) {
                var ad = {
                    "userId": $rootScope.user._id,
                    "postedBy": $rootScope.user.firstName + " " + $rootScope.user.lastName,
                    "postedOn": new Date(),
                    "from": sd,
                    "to": ed,
                    "address": address,
                    "details": details
                };
                UserService.postAd(ad)
                    .then(function (newAd) {
                        alert("Your Ad was successfully posted");
                        $location.path("/myprofile");
                    })
            }
            else {
                alert("All fields need to be filled out in the ad section");
            }
        }
        
        function add(status) {
            var currUser = $rootScope.user._id;
            var newPost = {
                "created": new Date(),
                "content": status,
                "userId": currUser
            }
            UserService.addPost(currUser, newPost)
                .then(function (newPost) {
                    $location.path("/myprofile");
                });
        };
    }

})();