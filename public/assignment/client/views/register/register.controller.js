'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('RegisterController', RegisterController);
    function RegisterController(UserService, $rootScope, $location) {
        var model = this;
        model.register = register;
        function register(uname,pwd,email) {
            var createUser = {
                username: uname,
                password: pwd,
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