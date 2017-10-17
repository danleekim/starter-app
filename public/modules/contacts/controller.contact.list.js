/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsListController', ContactsListController)

    ContactsListController.$inject = ['$stateParams','contentService']

    function ContactsListController($stateParams, contentService) {

        var vm = this;

        init();

        function init() {
            return contentService.getAllContacts()
            .then(data =>{
                vm.contacts = data;
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
})();