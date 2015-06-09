'use strict';

angular.module('srpTicketingApp')
    .factory("srpStatut", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/statut");

        return $firebaseArray(ref);
    }]);