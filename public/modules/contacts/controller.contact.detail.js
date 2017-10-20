/* global angular */
(function () {
    'use strict'

    angular.module('home.contacts')
        .controller('contactsDetailController', ContactsDetailController)

    ContactsDetailController.$inject = ['$stateParams', '$state', 'contentService']

    function ContactsDetailController($stateParams, $state, contentService) {

        var vm = this;
        var id = $stateParams._id;
        init();

        function init() {
            return contentService.getById($stateParams._id)
                .then(data => {
                    vm.contact = data;
                    console.log(vm.contact)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        vm.removeContact = (id) => {
            console.log("btn clicked")
            contentService.remove(id)
                .then(onSuccess)
                .catch(onError)
        }

        function onSuccess() {
            console.log("Success");
            $state.go('app.contacts.list');
        }

        function onError(data) {
            console.log(data)
        }

        vm.submitEdit = () => {
            contentService.update(vm.contact.data._id, vm.formData)
            .then(onSuccess)
            .catch(onError)
        }       
    }
})();