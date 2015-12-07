'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("AdsController", AdsController);

    function AdsController($rootScope, AdsService, $location) {

        var model = this;
        model.respond = respond;
        model.removeAd = removeAd;
        model.selectAd = selectAd;
        model.editAd = editAd;
        model.userid = "";
        model.isEdit = false;

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

        function editAd(by, on, add, from, to, det) {
            console.log(by);
            var editedAd = {
                "userId": model.userid,
                "postedBy": by,
                "postedOn": on,
                "from": from,
                "to": to,
                "address": add,
                "details": det
            };
            console.log(editedAd);
        }

        function selectAd(index) {
            model.isEdit = true;
            var ad = model.ads[index];
            console.log("selected", ad);
            model.by = ad.postedBy;
            model.on = ad.postedOn;
            model.newaddress = ad.address;
            model.newdetails = ad.details;

        }

        function removeAd(index) {
            //var curruser = $rootScope.user._id;
            AdsService.removeAd(model.ads[index]._id)
            .then(function (ads) {
                model.ads = ads;
            });
        };

        function respond(pid) {
            if (model.user) {
                if (model.userid === pid) {
                    alert("You cannot respond to your own ad");
                } else {
                    $location.path("/user/" + model.userid + "/chat/" + pid);
                }
            } else {
                alert("Login to respond");
                $location.path("/login");
            };
        };
    };
})();