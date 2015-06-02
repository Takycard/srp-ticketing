'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:DemandescpmCtrl
 * @description
 * # DemandescpmCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
.controller('DemandescpmCtrl', ['$scope', 'srpStatut', 'srpCat',
            'srpSubCat', 'srpPrio', 'srpVente',
            function ($scope, srpStatut, srpCat,
                        srpSubCat, srpPrio, srpVente) {

                $scope.userChoice = false;
                $scope.thousandFive = [
                    'Non',
                    'Oui'
                ];

                // create a synchronized array for priorities
                $scope.srpPrios = srpPrio;
                // create a synchronized array for sales
                $scope.srpVentes= srpVente;
                // create a synchronized array for status
                $scope.srpStatuts = srpStatut;
                // create a synchronized array for categories
                $scope.srpCategories = srpCat;
                // create a synchronized array for subcategories
                $scope.srpSubCategories = srpSubCat;

                $scope.addPrio = function(prio) {
                    $scope.srpPrios.$add({
                        content: prio
                        });
                }

                $scope.addVente = function(vente) {
                    $scope.srpVentes.$add({
                        content: vente
                        });
                }

                $scope.addStatut = function(statut) {
                    $scope.srpStatuts.$add({
                        content: statut
                        });
                }

                $scope.addCat = function(cat) {
                    $scope.srpCategories.$add({
                        content: cat
                        });
                }

                $scope.addSubCat = function(subCat) {
                    $scope.srpSubCategories.$add({
                        content: subCat
                    });
                }
            }
        ])

.factory("srpPrio", ["$firebaseArray", function($firebaseArray) {
    var ref = new Firebase("https://srp-ticketing.firebaseio.com/priority");

    return $firebaseArray(ref);
}
                    ])
.factory("srpVente", ["$firebaseArray", function($firebaseArray) {
    var ref = new Firebase("https://srp-ticketing.firebaseio.com/sale");

    return $firebaseArray(ref);
}
                    ])
.factory("srpStatut", ["$firebaseArray", function($firebaseArray) {
    var ref = new Firebase("https://srp-ticketing.firebaseio.com/statut");

    return $firebaseArray(ref);
}
                    ])
.factory("srpCat", ["$firebaseArray", function($firebaseArray) {
    var ref = new Firebase("https://srp-ticketing.firebaseio.com/category");

    return $firebaseArray(ref);
}
                    ])
.factory("srpSubCat", ["$firebaseArray", function($firebaseArray) {
    var ref = new Firebase("https://srp-ticketing.firebaseio.com/ss-category");

    return $firebaseArray(ref);
}
                    ]);