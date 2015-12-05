'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("ChatController", ChatController);

    function ChatController($rootScope, $location, $routeParams, UserService) {
        var model = this;
        model.send = send;
        model.uid = $rootScope.user._id;
        model.pid = $routeParams.personid;

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
                    }
                    UserService.sendMessage(message)
                        .then(function (msg) {
                            alert("message sent");
                            $location.path("/user/" + $routeParams.userid + "/userProfile/" + $routeParams.personid);
                        });
                }
                else {
                    alert("All fields need to be filled");
                }
            }
            else {
                alert("login to send a message");
                $location.path("/login");
            }
        }
    }

})();