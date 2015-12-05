'use strict';
(function () {
    angular
        .module("SocialApp")
        .factory("NewsService", NewsService);
    function NewsService($http, $q) {
        var service = {
            getnews: getnews
        };
        return service;

        function getnews(searchterm) {
            searchterm = searchterm || "syrian refugees";
            var deferred = $q.defer();
            //var query = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=5bc74893905927f22185a63f55558049:16:73673352";
            var host = "http://api.nytimes.com";
            var path = "/svc/search/v2/articlesearch.json"
            var q1 = "q=" + searchterm;
            var apikey = "api-key=5bc74893905927f22185a63f55558049:16:73673352";
            var link = host + path + "?" + q1 + "&" + apikey;
            $http.get(link)
                .success(function (response) {
                    deferred.resolve(response.response.docs);
                });
            return deferred.promise;
        }
    }
})();