(function () {
    angular
        .module("MovieApp")
        .controller("SearchMovieController", SearchMovieController);

    function SearchMovieController($scope,MovieService) {
        $scope.search = search;
        $scope.like = like;

        function search(title) {
            MovieService.searchMovieByTitle(title).then(function(response){
                $scope.results = response;
            });
            alert(title);
        }

        function like(idIMDB) {
            MovieService.likes(idIMDB);
        }
    }
})();