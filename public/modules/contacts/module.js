(function () {
    'use strict';
    angular
        .module('home.contacts', ['ui.router']).config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app.contacts', {
                url: '/contacts',
                views: {
                    'content@app': {
                        templateUrl: '/public/modules/contacts/contacts.html',
                        controller: 'contactsController as ctrl'
                    }
                }
            })
       
        // function getAllContacts(contentService) {
        //     return contentService.getAll()
        //         .then(data => {
        //             return data.items;
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // }
    }
})();