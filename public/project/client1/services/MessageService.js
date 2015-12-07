'use strict';
(function () {
    angular
        .module("SocialApp")
        .factory("MessageService", MessageService);

    function MessageService($http, $q) {

        var service = {
            getMessages: getMessages,
            getmsgforperson: getmsgforperson,
            sendMessage: sendMessage,
            removeMsg: removeMsg
        };
        return service;

        function getMessages(uid) {
            var deferred = $q.defer();
            $http.get("/api/project/messages/" + uid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function getmsgforperson(uid, pid) {
            var deferred = $q.defer();
            $http.get("/api/project/user/messages/to/" + uid + "/from/" + pid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function sendMessage(message) {
            var deferred = $q.defer();
            $http.post("/api/project/user/chat", message)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function removeMsg(uid, mid) {
            var deferred = $q.defer();
            $http.delete("/api/project/user/" + uid + "/message/" + mid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
    };
})();