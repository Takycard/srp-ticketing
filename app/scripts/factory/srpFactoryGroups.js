'use strict';

angular.module('srpTicketingApp')
    .factory("srpGroups", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/membres/groupes");

        return $firebaseArray(ref);
    }]);