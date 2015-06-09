'use strict';

angular.module('srpTicketingApp')
    .factory("srpCreateTckt", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/tickets");

        return $firebaseArray(ref);
    }]);