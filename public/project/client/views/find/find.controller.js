(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("FindController", FindController);

    function FindController($rootScope, $location, UserService) {
        var model = this;
        model.find = find;
        model.user = $rootScope.user;
        function find(name) {
            if (name) {
                UserService.findUsers(name)
                    .then(function (users) {
                        model.users = users;
                        model.search = true;
                });
            }
        }        
    }
})();