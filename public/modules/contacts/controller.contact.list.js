/* global angular */
(function(){
    'use strict'

    angular.module('home.contacts')
        .controller('contactsListController', ContactsListController)

        ContactsListController.$inject = ['contentService'] 

        function ContactsListController(contentService){

            var vm = this;
            vm.header = "Let's add some contacts";
            vm.inputData = {};


            


        }
})();