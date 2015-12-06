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
        model.showthread = false;

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
                        console.log(model.showthread);
                    });
            };
        };

        init();

        function chat(pid) {
            $location.path("/user/" + model.userid + "/chat/" + pid);
        };

        function removeMsg(ind) {
            var index = model.msgs.length - ind - 1;
            MessageService.removeMsg(model.userid, model.msgs[index]._id)
                .then(function (msgs) {
                    model.msgs = msgs;
                });
        };

        function getthread(pid) {
            MessageService.getmsgforperson($rootScope.user._id, pid)
                .then(function (msgs) {
                    model.showthread = true;
                    model.thread = msgs;
                    console.log(msgs);
                });
        };
    };
})();