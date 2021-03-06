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
            abstract: true,
            url: '/contacts'
        }).state('app.contacts.contacts', {
            url: '/contacts',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/contacts/contacts.form.html',
                    controller: 'contactsController as ctrl'
                }
            }
        }).state('app.contacts.list', {
            url: '/list',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/contacts/contacts.list.html',
                    controller: 'contactsListController as ctrl'
                }
            }
        }).state('app.contacts.detail', {
            url: '/detail/:_id',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/contacts/contact.detail.html',
                    controller: 'contactsDetailController as ctrl'
                }
            }

        });
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

    angular.module('home.contacts').controller('contactsDetailController', ContactsDetailController);

    ContactsDetailController.$inject = ['$stateParams', '$state', 'contentService'];

    function ContactsDetailController($stateParams, $state, contentService) {

        var vm = this;
        var id = $stateParams._id;
        init();

        function init() {
            return contentService.getById($stateParams._id).then(function (data) {
                vm.contact = data;
                console.log(vm.contact);
            }).catch(function (error) {
                console.log(error);
            });
        }

        vm.removeContact = function (id) {
            console.log("btn clicked");
            contentService.remove(id).then(onSuccess).catch(onError);
        };

        function onSuccess() {
            console.log("Success");
            $state.go('app.contacts.list');
        }

        function onError(data) {
            console.log(data);
        }

        vm.submitEdit = function () {
            contentService.update(vm.contact.data._id, vm.formData).then(onSuccess).catch(onError);
        };
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

        vm.submitForm = function () {
            return contentService.insert(vm.formData).then(onInsertSuccess).catch(onInsertError);
        };

        function onInsertSuccess(data) {
            console.log("success");
            vm.formData = '';
        }

        function onInsertError(error) {
            console.log(error);
        }
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('home.contacts').controller('contactsListController', ContactsListController);

    ContactsListController.$inject = ['$stateParams', 'contentService'];

    function ContactsListController($stateParams, contentService) {

        var vm = this;

        init();

        function init() {
            return contentService.getAllContacts().then(function (data) {
                vm.contacts = data;
            }).catch(function (error) {
                console.log(error);
            });
        }
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
            getAllContacts: getAllContacts,
            getById: getById,
            insert: insert,
            remove: remove,
            update: update
        };

        function getAllContacts() {
            return $http.get('/api/contacts').then(onSuccess).catch(onError);
        }

        function insert(contact, onSuccess, onError) {
            return $http.post('/api/contacts', contact).then(onSuccess).catch(onError);
        }

        function getById(id, onSuccess, onError) {
            return $http.get('/api/contacts/' + id).then(onSuccess).catch(onError);
        }

        function remove(id, onSuccess, onError) {
            return $http.delete('/api/contacts/' + id).then(onSuccess).catch(onError);
        }

        function update(_id, contact, onSuccess, onError) {
            return $http.put('/api/contacts/' + _id, contact).then(onSuccess).catch(onError);
        }

        function onSuccess(response) {
            return response.data;
        }

        function onError(error) {
            return $q.reject(error.data);
        }
    }
})();