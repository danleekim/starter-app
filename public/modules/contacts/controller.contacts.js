/* global angular */
(function(){
    'use strict'

    angular.module('home.contacts')
        .controller('contactsController', ContactsController)

        ContactsController.$inject = ['contentService'] 

        function ContactsController(contentService){

            var vm = this;
            vm.header = "Let's add some contacts";



        }
})();