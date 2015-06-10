'use strict';

angular.module('srpTicketingApp')
    .factory("srpVente", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/parametre-ticket/vente");

        return $firebaseArray(ref);
    }]);