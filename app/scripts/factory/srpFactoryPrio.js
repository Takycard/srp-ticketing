'use strict';

angular.module('srpTicketingApp')
    .factory("srpPrio", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/priority");

        return $firebaseArray(ref);
    }]);