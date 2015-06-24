'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:DemandescpmCtrl
 * @description
 * # DemandescpmCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
    .controller('DemandescpmCtrl', ['$scope', 'srpStatut', 'srpCat', 'srpSubCat', 'srpPrio', 'srpVente', 'srpCreateTckt', 'ngDialog', 'srpAddResponse', function ($scope, srpStatut, srpCat, srpSubCat, srpPrio, srpVente, srpCreateTckt, srpAddResponse, ngDialog) {
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

        $scope.srpNewResponse = srpAddResponse;

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

        $scope.addResponse = function(srpRep) {
            $scope.srpSubCategories.$add({
                content: srpRep
            });
        };

        // Create new tickets inside of Firebase
        $scope.addNewTicket = function(prio, vente, cats, subCats,
                                        newNumComm, newNumSale,
                                        newRefSrp, newSubject,
                                        newMsg, newResponse) {
            $scope.srpNewTckt.$add({
                prio: prio.content,
                vente: vente.content,
                cats: cats.content,
                subCat: subCats.content,
                noComm: newNumComm,
                noSale: newNumSale,
                refSrp: newRefSrp,
                subj: newSubject,
                msg: newMsg,
                rep: newResponse
            });
        };

        $scope.clickToOpen = function(index) {
            console.log(index);
            ngDialog.open({
                template: 'views/template-modal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    index: function() {
                        return index;
                    },
                    ticket: function() {
                        return srpCreateTckt[index];
                    },
                    statutList: function() {
                        return srpStatut;
                    },
                    newResponse: function() {
                        return srpAddResponse;
                    }
                }
            });
        };
        // IMPORTANT: Items should be placed in the grid in the order in which they should appear.
        // In most cases the sorting should be by row ASC, col ASC

        // these map directly to gridsterItem directive options
        $scope.standardItems = [
            { sizeX: 1, sizeY: 1, row: 0, col: 0, name: 'Tickets créés' },
            { sizeX: 1, sizeY: 1, row: 0, col: 1, name: 'Tickets "A traiter"' },
            { sizeX: 1, sizeY: 1, row: 0, col: 2, name: 'Tickets "En cours"' },
            { sizeX: 1, sizeY: 1, row: 1, col: 0, name: 'Tickets traités' },
            { sizeX: 1, sizeY: 1, row: 1, col: 1, name: 'Tickets résolus' },
            { sizeX: 1, sizeY: 1, row: 1, col: 2, name: 'Tickets escaladés' },
            { sizeX: 1, sizeY: 1, row: 2, col: 0, name: 'Tickets résolus DC+' },
            { sizeX: 1, sizeY: 1, row: 2, col: 1, name: 'Tickets résolus DC-' },
            { sizeX: 1, sizeY: 1, row: 2, col: 2, name: 'Catégories' },
            { sizeX: 1, sizeY: 1, row: 3, col: 0, name: 'Doublons' },
            { sizeX: 1, sizeY: 1, row: 3, col: 1, name: 'Hors procédure CPM' },
            { sizeX: 1, sizeY: 1, row: 3, col: 2, name: 'Top 10 Ventes' },
            { sizeX: 1, sizeY: 1, row: 4, col: 0, name: 'Avant/Après Vente' }
        ];

        $scope.$watch('standardItems', function() {
            console.log($scope.standardItems);
        }, true);
    }]);