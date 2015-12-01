'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("RegisterController", RegisterController);
    function RegisterController($location,UserService,$rootScope) {
        var model = this;
        model.register = register;
        function register(uname, pwd, vpwd, email, fname, lname) {
            if (uname && pwd && vpwd && email && fname && lname) {
                UserService.findAllUsers()
				.then(function (users) {
				    if (pwd !== vpwd) {
				        alert("both the password fields should match");
				    } else {
				        var exists = false;
				        var emailExists = false;
				        users.forEach(function (user, index) {
				            if (user && user.username === uname && user.password === pwd) {
				                exists = true;
				            }
				            else if (user && user.email === email) {
				                emailExists = true;
				            }
				        });
				        if (emailExists && exists) {
				            alert("User already exists with that email + username");
				        } else if (exists) {
				            alert("User already exists with that username");
				        } else if (emailExists) {
				            alert("User already exists with that email");
				        } else {
				            var newUser = {
				                username: uname,
				                password: pwd,
				                firstName: fname,
				                lastName: lname,
				                email: email
				            };
				            UserService.createUser(newUser)
                                .then(function (user) {
                                    $rootScope.user = user;
                                    $location.url('/myprofile');
                                });
				        }
				    }
				})
            }
        }
    }
})();