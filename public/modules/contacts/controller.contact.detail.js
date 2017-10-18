/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsDetailController', ContactsDetailController)

    ContactsDetailController.$inject = ['$stateParams', '$state', 'contentService']

    function ContactsDetailController($stateParams, $state, contentService) {

        var vm = this;

        init();

        function init() {
            return contentService.getById($stateParams._id)
            .then(data =>{
                vm.contact = data;
                console.log(vm.contact)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
})();