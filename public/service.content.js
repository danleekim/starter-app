/* global angular */
(function () {
    'use strict'

    angular.module('home.content')
        .factory('contentService', ContentServiceFactory)

    ContentServiceFactory.$inject = ['$http', '$q']

    function ContentServiceFactory($http, $q) {
        return {
            getAll: getAll
        }

        function getAll() {
            return $http.get('/api/contact')
                .then(onSuccess)
                .catch(onError)
        }

        function onSuccess(response) {
            return response.data
        }

        function onError(error) {
            return $q.reject(error.data)
        }
    }
})();