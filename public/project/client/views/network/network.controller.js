(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("NetworkController", NetworkController);

    function NetworkController($rootScope, $location, UserService) {
        var model = this;
        model.user = $rootScope.user;

        function init() {
            var uid = $rootScope.user._id;
            console.log(uid);
            UserService.getFriends(uid)
                .then(function (friends) {
                    model.friends = friends;
                });
        }
        init();
    }

})();