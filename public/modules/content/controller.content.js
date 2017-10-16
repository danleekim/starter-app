/* global angular */
(function(){
    'use strict'

    angular.module('home.content')
        .controller('contentController', ContentController)

        ContentController.$inject = [] 

        function ContentController(){

            var vm = this;
            vm.header = "Hello Danny";

            



        }
})();