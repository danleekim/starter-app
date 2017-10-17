/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsDetailController', ContactsDetailController)

        ContactsDetailController.$inject = ['contentService', 'contacts']

    function ContactsDetailController(contentService, contacts) {

        var vm = this;

        init();

        function init() {
            return contentService.getById(id)
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