(function () {
    'use strict';
    angular
        .module('home.content', ['ui.router']).config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app.content', {
                url: '/',
                views: {
                    'content@app': {
                        templateUrl: './public/content.html',
                        controller: ''
                    }
                }
            })
    }
})();