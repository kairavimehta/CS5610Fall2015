'use strict';
(function () {
    angular
        .module("SocialApp")
        .config(Configure);
    function Configure($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html"
            })
            .when("/news", {
                templateUrl: "views/news/news.view.html",
                controller: "NewsController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/login/login.view.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/ads", {
                templateUrl: "views/ads/ads.view.html",
                controller: "AdsController",
                controllerAs: "model"
            })
            .when("/user/:userid/chat/:personid", {
                templateUrl: "views/chat/chat.view.html",
                controller: "ChatController",
                controllerAs: "model"
            })
            .when("/find", {
                templateUrl: "views/find/find.view.html",
                controller: "FindController",
                controllerAs: "model"
            })
            .when("/message", {
                templateUrl: "views/message/message.view.html",
                controller: "MessageController",
                controllerAs: "model"
            })
            .when("/myprofile", {
                templateUrl: "views/myprofile/myprofile.view.html",
                controller: "MyProfileController",
                controllerAs: "model"
            })
            .when("/network", {
                templateUrl: "views/network/network.view.html",
                controller: "NetworkController",
                controllerAs: "model"
            })
            .when("/upload", {
                templateUrl: "views/upload/upload.view.html",
                controller: "UploadController",
                controllerAs: "model"
            })
            .when("/user/:userId/userProfile/:profileId", {
                templateUrl: "views/userProfile/userProfile.view.html",
                controller: "UserProfileController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();