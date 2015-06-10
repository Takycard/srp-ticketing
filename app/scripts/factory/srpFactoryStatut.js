'use strict';

angular.module('srpTicketingApp')
    .factory("srpStatut", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/parametre-ticket/statut");

        return $firebaseArray(ref);
    }]);