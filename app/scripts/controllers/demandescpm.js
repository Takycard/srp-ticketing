'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:DemandescpmCtrl
 * @description
 * # DemandescpmCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
    .controller('DemandescpmCtrl', function ($scope, $firebaseArray) {

    var ref = new Firebase("https://srp-ticketing.firebaseio.com/demandes-cpm");

    $scope.ssCat = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.userChoice = false;

    // create a synchronized array
    $scope.tickets = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to Firebase!
    $scope.addTicket = function() {
        $scope.tickets.$add({
            text: $scope.newTicketText
        });
    };
});