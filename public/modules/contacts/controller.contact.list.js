/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsListController', ContactsListController)

    ContactsListController.$inject = ['contentService']

    function ContactsListController(contentService) {

        var vm = this;
        vm.header = "Let's add some contacts";
        init();

        function init() {
            return contentService.getAllContacts()
            .then(data =>{
                debugger
                vm.contacts = data;
                console.log(vm.contacts)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
})();