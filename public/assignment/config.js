(function(){
    angular
        .module("FormBuilderApp")
        .config(Configure);

    function Configure($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl: "home/home.view.html"
            })
            .when("/login", {
                templateUrl: "login/login.view.html",
                controller:"login/login.controller.js"
            })
            .when("/register",{
                templateUrl: "register/register.view.html",
                controller: "register/register.controller.js"
            })
            
            .when("/profile",{
                templateUrl: "profile/profile.view.html",
                controller: "profile/profile.controller.js"
            })
            .when("/forms",{
                templateUrl: "form/form.view.html",
                controller: "form/form.controller.js"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();