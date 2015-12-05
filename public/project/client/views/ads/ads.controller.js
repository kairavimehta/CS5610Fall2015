(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("AdsController", AdsController);

    function AdsController($rootScope, UserService, $location) {
        var model = this;
        model.respond = respond;
        model.removeAd = removeAd;
        model.userid = "";

        function init() {
                //edit ad
            if ($rootScope.user) {
                model.userid = $rootScope.user._id;
            }

            UserService.getAds()
                .then(function (response) {
                    model.ads = response;
                })
        }
        init();

        function removeAd(index) {
            var curruser = $rootScope.user._id;
            UserService.removeAd(model.ads[index]._id)
            .then(function (ads) {
                model.ads = ads;
            });
        }

        function respond(pid) {
            if ($rootScope.user) {
                if ($rootScope.user._id === pid) {
                    alert("You cannot respond to your own ad");
                }
                else{
                    $location.path("/user/" + $rootScope.user._id + "/chat/" + pid);
                }
            }
            else {
                alert("Login to respond");
                $location.path("/login");
            }
        }
    }

})();