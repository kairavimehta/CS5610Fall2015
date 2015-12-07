'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("ChatController", ChatController);

    function ChatController($rootScope, $location, $routeParams, MessageService) {
        var model = this;
        model.send = send;
        model.uid = $rootScope.user._id;
        model.pid = $routeParams.personid;
        model.user = $rootScope.user;


        function send(sub, msg) {
            if ($rootScope.user) {
                if (sub && msg) {

                    var message = {
                        "from": $routeParams.userid,
                        "fromUser": $rootScope.user.firstName + " " + $rootScope.user.lastName,
                        "subject": sub,
                        "content": msg,
                        "date": new Date(),
                        "to": $routeParams.personid
                    };

                    MessageService.sendMessage(message)
                        .then(function (msg) {
                            alert("message sent");
                            $location.path("/user/" + $routeParams.userid + "/userProfile/" + $routeParams.personid);
                        });
                } else {
                    alert("All fields need to be filled");
                }
            } else {
                alert("login to send a message");
                $location.path("/login");
            };
        };
    };
})();