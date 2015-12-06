'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("NewsController", NewsController);

    function NewsController(NewsService) {
        var model = this;
        model.find = find;

        function init() {
            NewsService.getnews()
                .then(function (news) {
                    model.news = news;
                });
        };

        init();

        function find(term) {
            NewsService.getnews(term)
                .then(function (news) {
                    model.news = news;
                });
        };
    };
})();