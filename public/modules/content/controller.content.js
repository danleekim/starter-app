/* global angular */
(function(){
    'use strict'

    angular.module('home.content')
        .controller('contentController', ContentController)

        ContentController.$inject = ['contentService'] 

        function ContentController(contentService){

            var vm = this;
            vm.header = "Hello Danny";



        }
})();