(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("UserProfileController", UserProfileController);

    function UserProfileController($location, UserService, $rootScope, $routeParams) {
        var model = this;
        model.addFriend = addFriend;
        model.removeFriend = removeFriend;
        model.isFriend = false;
        model.self = false;
        model.userid = $routeParams.userId;
        model.personid = $routeParams.profileId;

        function init() {
            var userid = $routeParams.userId;
            var personid = $routeParams.profileId;
            if (userid === personid) {
                model.self = true;
            }
            UserService.checkFriends(userid, personid)
                .then(function (response) {
                    if (response.length > 0) {
                        model.isFriend = true;
                    }
                    else {
                        model.isFriend = false;
                    }
                });
            UserService.getAllPosts(personid)
                .then(function (posts) {
                    model.posts = posts;
                });
            UserService.getusername(personid)
                .then(function (user) {
                    var fname = user.firstName;
                    var lname = user.lastName;
                    model.username = fname + " " + lname;
                });
        }
        init();

        function addFriend() {
            var userid = $routeParams.userId;
            var personid = $routeParams.profileId;
            UserService.addFriend(userid, personid)
                .then(function (response) {
                    init();
                })
        }
        function removeFriend() {
            var userid = $routeParams.userId;
            var personid = $routeParams.profileId;
            UserService.removeFriend(userid, personid)
                .then(function (response) {
                    init();
                })
        }
    }

})();