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
    'home.main', 'home.content', 'home.contacts',

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

    angular.module('home.contacts', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('app.contacts', {
            url: '/contacts',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/contacts/contacts.html',
                    controller: 'contactsController as ctrl',
                    resolve: {
                        contacts: getAllContacts
                    }
                }
            }
        }).state('app.contacts.list', {
            url: '/contacts/list',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/contacts/contacts.list.html',
                    controller: 'contactsListController as ctrl',
                    resolve: {
                        contacts: getAllContacts
                    }
                }
            }
        });

        function getAllContacts(contentService) {
            debugger;
            return contentService.getAll().then(function (data) {
                return data.items;
            }).catch(function (error) {
                console.log(error);
            });
        }
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

        angular.module('home.contacts').controller('contactsListController', ContactsListController);

        ContactsListController.$inject = ['contentService'];

        function ContactsListController(contentService) {

                var vm = this;
                vm.header = "Let's add some contacts";
                vm.inputData = {};
        }
})();
'use strict';

/* global angular */
(function () {
        'use strict';

        angular.module('home.contacts').controller('contactsController', ContactsController);

        ContactsController.$inject = ['contentService'];

        function ContactsController(contentService) {

                var vm = this;
                vm.header = "Let's add some contacts";
                vm.inputData = {};
        }
})();
'use strict';

/* global angular */
(function () {
        'use strict';

        angular.module('home.content').controller('contentController', ContentController);

        ContentController.$inject = [];

        function ContentController() {

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
            return $http.get('/api/contacts').then(onSuccess).catch(onError);
        }

        function onSuccess(response) {
            return response.data;
        }

        function onError(error) {
            return $q.reject(error.data);
        }
    }
})();