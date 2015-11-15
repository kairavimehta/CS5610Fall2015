'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('RegisterController', RegisterController);

    function RegisterController(UserService, $rootScope, $location) {
        var model = this;
        model.register = register;
        function register(username,password,email) {
            var createUser = {
                username: username,
                password: password,
                email: email
            };
            UserService.createUser(createUser)
                .then(function (user) {
                    $rootScope.user = user;
                    $location.url('/profile');
                })
        }
    }
})();