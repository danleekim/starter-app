/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsListController', ContactsListController)

    ContactsListController.$inject = ['contentService']

    function ContactsListController(contentService) {

        var vm = this;

        init();

        function init() {
            return contentService.getAllContacts()
            .then(data =>{
                vm.contacts = data;
                console.log(vm.contacts)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
})();