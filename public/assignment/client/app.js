'use strict';
(function () {
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .run(function ($rootScope) {
            $rootScope.user = {};
        });
})(); 