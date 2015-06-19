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
        $scope.srpCategories.$loaded(function() {
            console.log($scope.srpCategories);
        });
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
            //            $scope.srpStatuts.forEach(function(d) {
            //                d.content;
            //                d.ss-cat[0];
            //            });
        };


        // IMPORTANT: Items should be placed in the grid in the order in which they should appear.
        // In most cases the sorting should be by row ASC, col ASC

        // these map directly to gridsterItem directive options
        $scope.standardItems = [
            { sizeX: 2, sizeY: 2, row: 4, col: 0, name: 'Tickets créés' },
            { sizeX: 2, sizeY: 2, row: 1, col: 1, name: 'Tickets "A traiter"' },
            { sizeX: 2, sizeY: 2, row: 1, col: 2, name: 'Tickets "En cours"' },
            { sizeX: 2, sizeY: 2, row: 1, col: 3, name: 'Tickets traités' },
            { sizeX: 2, sizeY: 2, row: 2, col: 0, name: 'Tickets résolus' },
            { sizeX: 2, sizeY: 2, row: 2, col: 1, name: 'Tickets escaladés' },
            { sizeX: 2, sizeY: 2, row: 2, col: 2, name: 'Tickets résolus DC+' },
            { sizeX: 2, sizeY: 2, row: 2, col: 3, name: 'Tickets résolus DC-' },
            { sizeX: 2, sizeY: 2, row: 3, col: 0, name: 'Catégories' },
            { sizeX: 2, sizeY: 2, row: 3, col: 1, name: 'Doublons' },
            { sizeX: 2, sizeY: 2, row: 3, col: 2, name: 'Hors procédure CPM' },
            { sizeX: 2, sizeY: 2, row: 3, col: 3, name: 'Top 10 Ventes' },
            { sizeX: 2, sizeY: 2, row: 1, col: 0, name: 'Avant/Après Vente' }
        ];

        $scope.addCat = function(cat, subCats) {
            $scope.srpCategories.$add({
                content: cat,
                ssCat:{
                    srpName: subCats
                }
            });
        };

        $scope.addSubCat = function(subCat) {
            $scope.srpSubCategories.$add({
                content: subCat
            });
        };

        // Create new tickets inside of Firebase
        $scope.addNewTicket = function(prio, vente, cats, subCats,
                                        newNumComm, newNumSale,
                                        newRefSrp, newSubject,
                                        newMsg) {
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
    }]);