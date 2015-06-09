'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:TicketsEscaladeCtrl
 * @description
 * # TicketsEscaladeCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
    .controller('TicketsEscaladeCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.tabs = [
        { title:'Tickets à traiter', content:'Tab for displaying the untreated tickets' },
        { title:'Tickets du groupe', content:'Tab for displaying the group\'s tickets' },
        { title:'Nouveau ticket', content:'Tab for creating new tickets' },
        { title:'Paramètres', content:'Tab for creating new categories and subcategories' },
        { title:'Recherche', content:'Tab for searching tickets' },
        { title:'Statistiques', content:'Tab to see Wallboard Escalade' }
    ];
});
