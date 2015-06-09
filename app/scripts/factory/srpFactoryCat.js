'use strict';
angular.module('srpTicketingApp')
    .factory("srpCat", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/category");

        return $firebaseArray(ref);
    }]);