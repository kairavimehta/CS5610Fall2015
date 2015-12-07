'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("NetworkController", NetworkController);

    function NetworkController($rootScope, FriendService) {
        var model = this;
        model.user = $rootScope.user;

        $rootScope.$on('auth', function (user) {
            init();
        });

        function init() {
            if ($rootScope.user) {
                model.user = $rootScope.user;
                var uid = $rootScope.user._id;
                FriendService.getFriends(uid)
                    .then(function (friends) {
                        model.friends = friends;
                    });
            };
        };
        init();
    };
})();