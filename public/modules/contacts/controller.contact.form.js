/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsController', ContactsController)

    ContactsController.$inject = ['contentService']

    function ContactsController(contentService) {

        var vm = this;

        vm.submitForm = () =>
            contentService.insert(vm.formData)
            .then(onInsertSuccess)
            .catch(onInsertError)

        function onInsertSuccess(data) {
            console.log("success");
            vm.formData = '';
        }

        function onInsertError(error) {
            console.log(error)
        }
    }
})();