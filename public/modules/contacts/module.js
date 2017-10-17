(function () {
    'use strict';
    angular
        .module('home.contacts', ['ui.router']).config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app.contacts', {
                abstract: true,
                url: '/contacts'
            })
            .state('app.contacts.contacts', {
                url: '/contacts',
                views: {
                    'content@app': {
                        templateUrl: '/public/modules/contacts/contacts.html',
                        controller: 'contactsController as contactCtrl',
                    }
                }
            })
            .state('app.contacts.list', {
                url: '/list',
                views: {
                    'content@app': {
                        templateUrl: '/public/modules/contacts/contacts.list.html',
                        controller: 'contactsListController as ctrl',
                        
                    }
                }
            })
    }
})();