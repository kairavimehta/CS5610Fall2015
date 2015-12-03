(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("AdsController", AdsController);

    function AdsController(UserService) {
        var model = this;

        function init() {
            UserService.getAds()
                .then(function (response) {
                    //model.ads = response;
                    //console.log(response);
                })
        }
        init();
    }

})();