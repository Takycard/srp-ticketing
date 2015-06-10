'use strict';

angular.module('srpTicketingApp')
    .factory("srpPrio", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/parametre-ticket/priority");

        return $firebaseArray(ref);
    }]);