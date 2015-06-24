'use strict';

angular.module('srpTicketingApp')
    .factory("srpAddResponse", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/parametre-ticket/reponses");

        return $firebaseArray(ref);
    }]);