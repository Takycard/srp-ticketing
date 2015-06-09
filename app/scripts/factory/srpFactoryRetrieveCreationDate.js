'use strict';

angular.module('srpTicketingApp')
    .factory("srpCreationDate", ["$firebaseArray", function($firebaseArray) {
        return $firebaseArray(ref);
    }]);