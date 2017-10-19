/* global angular */
(function () {
    'use strict'

    angular.module('home.services')
        .factory('contentService', ContentServiceFactory)

    ContentServiceFactory.$inject = ['$http', '$q']

    function ContentServiceFactory($http, $q) {
        return {
            getAllContacts: getAllContacts,
            getById: getById,
            insert: insert,
            remove: remove,
            update: update
        }

        function getAllContacts() {
            return $http.get('/api/contacts')
                .then(onSuccess)
                .catch(onError)
        }

        function insert(contact, onSuccess, onError) {
            return $http.post('/api/contacts', contact)
                .then(onSuccess)
                .catch(onError)
        }

        function getById(id, onSuccess, onError) {
            return $http.get(`/api/contacts/${id}`)
                .then(onSuccess)
                .catch(onError)
        }     

        function remove(id, onSuccess, onError) {
            return $http.delete(`/api/contacts/${id}`)
                .then(onSuccess)
                .catch(onError)
        }

        function update(_id, contact, onSuccess, onError) {
            return $http.put(`/api/contacts/${_id}`, contact)
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