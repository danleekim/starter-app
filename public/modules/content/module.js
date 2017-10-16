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
                        templateUrl: '/public/modules/content/content.html',
                        controller: 'contentController as ctrl'
                    }
                }
            })
        // .state('app.schedule', {
        //     url: '/schedule', 
        //     view: {
        //         'content@app': {
        //             templateUrl: './public/schedule.html',
        //             // controller: 'scheduleController as ctrl' 
        //         }
        //     }
        // })w

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