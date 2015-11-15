(function () {
    angular
        .module("MovieApp")
        .controller("SearchMovieController", SearchMovieController);

    function SearchMovieController($scope, $http, MovieService) {


        $scope.searchMovie = function (title) {
            MovieService.searchMovieByTitle(title, function (response) {
                $scope.response = response;
            });
        };

        $scope.likeMovie = function (idIMDB) {
            MovieService.likeMovie(idIMDB, function (response) {

            });
        }
    }
})();