'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:DemandescpmCtrl
 * @description
 * # DemandescpmCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
.controller('DemandescpmCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.test = false;
    $scope.testNouveauTicket = false;

    $scope.toggle = function() {
        $scope.test = !$scope.test;
    }

    $scope.toggleNouveauTicket = function() {
        $scope.testNouveauTicket = !$scope.testNouveauTicket;
    }
});
