'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("FindController", FindController);

    function FindController($rootScope, UserService) {
        var model = this;
        model.find = find;
        model.user = $rootScope.user;

        function find(name) {
            if (name) {
                UserService.findUsers(name)
                    .then(function (users) {
                        if (users.length > 0) {
                            model.users = users;
                            model.search = true;
                            model.found = false;
                        }
                        else {
                            model.found = true;
                        }
                    });
            };
        };
    };
})();