(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("MessageController", MessageController);

    function MessageController($rootScope, $location, UserService) {

        var model = this;
        model.chat = chat;
        model.removeMsg = removeMsg;

        function init() {
            if ($rootScope.user) {
                model.userid = $rootScope.user._id;
                UserService.getMessages(model.userid)
                .then(function (msgs) {
                    model.msgs = msgs;
                });
            }
            else {
                alert("login to access this page");
                $location.path("/login");
            }
        }

        init();

        function chat (pid) {
            $location.path("/user/" + model.userid + "/chat/" + pid);
        };

        function removeMsg(ind) {
            var index = model.msgs.length - ind - 1;
            UserService.removeMsg(model.userid, model.msgs[index]._id)
                .then(function (msgs) {
                    model.msgs = msgs;
                })
        }

    }
})();