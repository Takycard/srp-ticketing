'use strict';

angular.module('srpTicketingApp')
    .factory("srpNameCreator", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/users");

        return $firebaseArray(ref);
    }]);