'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:DemandescpmCtrl
 * @description
 * # DemandescpmCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
.controller('DemandescpmCtrl', function ($scope, $window) {
    $scope.ssCat = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.userChoice = false;
});