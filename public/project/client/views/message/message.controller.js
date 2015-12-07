'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("MessageController", MessageController);

    function MessageController($rootScope, $location, MessageService) {
        var model = this;
        model.chat = chat;
        model.removeMsg = removeMsg;
        model.getthread = getthread;
        model.getall = getall;
        model.all = true;

        $rootScope.$on('auth', function (user) {
            init();
        });

        function init() {
            if ($rootScope.user) {
                model.user = $rootScope.user;
                model.userid = $rootScope.user._id;
                MessageService.getMessages(model.userid)
                    .then(function (msgs) {
                        model.msgs = msgs;
                    });
            };
        };

        init();

        function chat(pid) {
            $location.path("/user/" + model.userid + "/chat/" + pid);
        };

        function removeMsg(index) {
            MessageService.removeMsg(model.userid, model.msgs[index]._id)
                .then(function (msgs) {
                    model.msgs = msgs;
                });
        };

        function getthread(pid) {
            MessageService.getmsgforperson(model.userid, pid)
                .then(function (msgs) {
                    model.all = false;
                    model.thread = msgs;
                });
        };

        function getall() {
            model.all = true;
        }
    };
})();