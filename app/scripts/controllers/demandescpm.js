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
                //                ,
                //                ss-cat: [
                //                    'Blabla',
                //                ]
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
                    "srpName": subCats
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
            console.log('start');
            console.log(srpCat);
            console.log(srpSubCat);
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
    }]);
