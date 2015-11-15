'use strict';
(function () {
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .run(function ($rootscope) {
            $rootscope.user = {};
        });
})();