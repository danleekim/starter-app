(function () {
    'use strict';
    angular
        .module('home.main', ['ui.router']).config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: '/public/modules/main/main.html',
                        
                    }
                }
            })
    }
})();