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
                        templateUrl: '/public/modules/contacts/contacts.form.html',
                        controller: 'contactsController as ctrl',
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
            .state('app.contacts.detail', {
                url: '/detail/:id',
                views: {
                    'content@app': {
                        templateUrl: '/public/modules/contacts/contact.detail.html',
                        controller: 'contactsDetailController as ctrl',

                    }
                }
            })
    }
})();