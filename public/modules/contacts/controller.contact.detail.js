/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsDetailController', ContactsDetailController)

        ContactsDetailController.$inject = ['$stateParams','contentService']

    function ContactsDetailController($stateParams, contentService) {

        var vm = this;

        // init();

        // function init() {
        //     return contentService.getById(id)
        //     .then(data =>{
        //         vm.contacts = data;
        //         console.log(vm.contacts)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // }
    }
})();