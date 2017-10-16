/* global $ angular */
'use strict';

$(function () {
    angular.bootstrap(document, ['home']);
});
"use strict";

(function () {
    "use strict";

    angular.module("home", [
    // 3rd party
    "ui.router",

    //service registration

    //views-controllers
    'home.main', 'home.content',

    //services
    'home.services']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('home.content', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('app.content', {
            url: '/',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/content/content.html',
                    controller: 'contentController as ctrl'
                }
            }
        });
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
'use strict';

(function () {
    'use strict';

    angular.module('home.main', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: '/public/modules/main/main.html'

                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('home.services', []);
})();
'use strict';

/* global angular */
(function () {
        'use strict';

        angular.module('home.content').controller('contentController', ContentController);

        ContentController.$inject = ['contentService'];

        function ContentController(contentService) {

                var vm = this;
                vm.header = "Hello Danny";
        }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('home.services').factory('contentService', ContentServiceFactory);

    ContentServiceFactory.$inject = ['$http', '$q'];

    function ContentServiceFactory($http, $q) {
        return {
            getAll: getAll
        };

        function getAll() {
            return $http.get('/api/contact').then(onSuccess).catch(onError);
        }

        function onSuccess(response) {
            return response.data;
        }

        function onError(error) {
            return $q.reject(error.data);
        }
    }
})();