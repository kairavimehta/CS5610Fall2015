(function () {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {
        var service = {
            findUserByUsernameAndPassword: findByCredentials,
            findAllUsers: findAll,
            findUserByUsername: findByUsername,
            findUserById: findById,
            createUser: createUser,
            updateUser: updateUser,
            deleteUserById: deleteById
        };
        return service;

        function findByCredentials(uname, pwd) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/" + uname + "/" + pwd)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function findAll() {
            var deferred = $q.defer();
            $http.get("/api/assignment/user")
                .success(function (response) {
                    deferred.resolve(response);
                })
            return deferred.promise;
        }

        function findByUsername(uname) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/" + uname)
                .success(function (response) {
                    deferred.resolve(response)
                });
            return deferred.promise;
        }

        function findById(uid) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/" + uid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function createUser(user) {
            var deferred = $q.defer();
            $http.post("/api/assignment/user", user)
            .success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }

        function updateUser(uid, user) {
            var deferred = $q.defer();
            $http.put("/api/assignment/user/" + uid, user)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteById(uid) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/user/" + uid)
                .success(function (users) {
                    deferred.resolve(users)
                });
            return deferred.promise;
        }
    }
})();