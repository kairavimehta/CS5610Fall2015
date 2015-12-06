'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("AdsController", AdsController);

    function AdsController($rootScope, AdsService, $location) {

        var model = this;
        model.respond = respond;
        model.removeAd = removeAd;
        model.userid = "";

        //edit ad

        $rootScope.$on('auth', function (user) {
            init();
        });

        function init() {
            if ($rootScope.user) {
                model.user = $rootScope.user;
                model.userid = $rootScope.user._id;
            };
            AdsService.getAds()
                .then(function (response) {
                    model.ads = response;
                });
        };

        init();

        function removeAd(index) {
            var curruser = $rootScope.user._id;
            AdsService.removeAd(model.ads[index]._id)
            .then(function (ads) {
                model.ads = ads;
            });
        };

        function respond(pid) {
            if ($rootScope.user) {
                if ($rootScope.user._id === pid) {
                    alert("You cannot respond to your own ad");
                } else {
                    $location.path("/user/" + $rootScope.user._id + "/chat/" + pid);
                }
            } else {
                alert("Login to respond");
                $location.path("/login");
            };
        };
    };
})();