'use strict';

angular.module('srpTicketingApp')
   .factory("srpSubCat", ["$firebaseArray", function($firebaseArray) {
        var ref = new Firebase("https://srp-ticketing.firebaseio.com/parametre-ticket/ss-categories");

        return $firebaseArray(ref);
    }]);