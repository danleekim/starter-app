(function () {
    "use strict";
    angular
        .module("home", [
            // 3rd party
            "ui.router",

            //service registration

            //views-controllers
            'home.main',
            'home.content'

        ])

        .config(RouteConfig)

    RouteConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        //$urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }

})()