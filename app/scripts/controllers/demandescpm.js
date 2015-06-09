'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:DemandescpmCtrl
 * @description
 * # DemandescpmCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
    .controller('DemandescpmCtrl', ['$scope', 'srpStatut', 'srpCat','srpSubCat', 'srpPrio', 'srpVente', 'srpCreateTckt', function ($scope, srpStatut, srpCat,                                                 srpSubCat, srpPrio, srpVente, srpCreateTckt){
        $scope.userChoice = false;
        $scope.thousandFive = [
            'Non',
            'Oui'
        ];

        // create a synchronized array for priorities
        $scope.srpPrios = srpPrio;
        // create a synchronized array for sales
        $scope.srpVentes = srpVente;
        // create a synchronized array for status
        $scope.srpStatuts = srpStatut;
        // create a synchronized array for categories
        $scope.srpCategories = srpCat;
        // create a synchronized array for subcategories
        $scope.srpSubCategories = srpSubCat;
        // create a synchronized object for new tickets
        $scope.srpNewTckt = srpCreateTckt;

        $scope.addPrio = function(prio) {
            $scope.srpPrios.$add({
                content: prio
            });
        };

        $scope.addVente = function(vente) {
            $scope.srpVentes.$add({
                content: vente
            });
        };

        $scope.addStatut = function(statut) {
            $scope.srpStatuts.$add({
                content: statut
            });
        };

        $scope.addCat = function(cat) {
            $scope.srpCategories.$add({
                content: cat
            });
        };

        $scope.addSubCat = function(subCat) {
            $scope.srpSubCategories.$add({
                content: subCat
            });
        };

        $scope.addNewTicket = function(prio, vente, cats, subCats,
                                        newNumComm, newNumSale,
                                        newRefSrp, newSubject,
                                        newMsg) {
            console.log('start');
            console.log(vente);
            console.log(cats);
            console.log(subCats);
            console.log(prio);
            console.log(srpCreateTckt[2]);
            console.log('end');
            $scope.srpNewTckt.$add({
                prio: prio.content,
                vente: vente.content,
                cats: cats.content,
                subCat: subCats.content,
                noComm: newNumComm,
                noSale: newNumSale,
                refSrp: newRefSrp,
                subj: newSubject,
                msg: newMsg
            });
        };
    }])

    .factory("srpPrio", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/priority");

        return $firebaseArray(ref);
    }])
    .factory("srpVente", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/sale");

        return $firebaseArray(ref);
    }])
    .factory("srpStatut", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/statut");

        return $firebaseArray(ref);
    }])
    .factory("srpCat", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/category");

        return $firebaseArray(ref);
    }])
    .factory("srpSubCat", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/ss-category");

        return $firebaseArray(ref);
    }])
    .factory("srpCreateTckt", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/tickets");

        return $firebaseArray(ref);
    }]);