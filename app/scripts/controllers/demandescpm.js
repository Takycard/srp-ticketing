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
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.tabs = [
        { title:'Ticket à traiter', content:'Tab for displaying the untreated tickets' },
        { title:'Tickets non lus', content:'Tab for displaying the unread tickets' },
        { title:'Mes tickets et tickets suivis', content:'Tab for displaying the follow\'s tickets' },
        { title:'Nouveau ticket', content:'Tab for creating new tickets' },
        { title:'Paramètres', content:'Tab for creating and displaying new categories & subcategories' },
        { title:'Recherche', content:'Tab for searching tickets' },
        { title:'Statistiques', content:'Tab to see Wallboard CPM' }
    ];
    //    $scope.test = false;
    //    $scope.testNouveauTicket = false;
    //
    //    $scope.toggle = function() {
    //        $scope.test = !$scope.test;
    //    }
    //
    //    $scope.toggleNouveauTicket = function() {
    //        $scope.testNouveauTicket = !$scope.testNouveauTicket;
    //    }
});



//TABS WORKS BUT WITHOUT ANGULAR
//.controller('DemandescpmCtrl', function ($scope) {
//    $scope.awesomeThings = [
//        'HTML5 Boilerplate',
//        'AngularJS',
//        'Karma'
//    ];
//    $(document).ready(function(){
//        $("#myTab a").click(function(e){
//            e.preventDefault();
//            $(this).tab('show');
//        });
//    });
//});

