'use strict';

/**
 * @ngdoc function
 * @name srpTicketingApp.controller:DemandescpmCtrl
 * @description
 * # DemandescpmCtrl
 * Controller of the srpTicketingApp
 */
angular.module('srpTicketingApp')
.controller('DemandescpmCtrl', ['$scope', 'srpCat', 'srpSsCat',
            function ($scope, srpCat, srpSsCat) {

                $scope.userChoice = false;

                // create a synchronized array for category
                $scope.cats = srpCat;
                $scope.cat = "";

                // create a synchronized array for category
                $scope.ssCats = srpSsCat;
                $scope.ssCat = "";

//                $scope.ssCat = [
//                    'Test',
//                    'Blabla'
//                ];
                $scope.addCat = function() {
                    $scope.cats.$add({
                        content: $scope.cat
                        });
                }

                $scope.addSsCat = function() {
                    $scope.ssCats.$add({
                        content: $scope.ssCat
                    });
                }
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