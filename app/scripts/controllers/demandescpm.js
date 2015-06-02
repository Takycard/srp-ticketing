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
            'srpSsCat',
            function ($scope, srpStatut, srpCat, srpSsCat) {

                $scope.userChoice = false;

                // create a synchronized array for category
                $scope.statuts = srpStatut;

                // create a synchronized array for category
                $scope.cats = srpCat;

                // create a synchronized array for category
                $scope.ssCats = srpSsCat;

//                $scope.ssCat = [
//                    'Test',
//                    'Blabla'
//                ];

                $scope.addStatut = function(statut) {
                    $scope.statuts.$add({
                        content: statut
                        });
                }

                $scope.addCat = function(cat) {
                    $scope.cats.$add({
                        content: cat
                        });
                }

                $scope.addSsCat = function(ssCat) {
                    $scope.ssCats.$add({
                        content: ssCat
                    });
                }
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
.factory("srpSsCat", ["$firebaseArray", function($firebaseArray) {
    var ref = new Firebase("https://srp-ticketing.firebaseio.com/ss-category");

    return $firebaseArray(ref);
}
                    ]);