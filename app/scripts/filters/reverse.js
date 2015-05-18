'use strict';

angular.module('srpTicketingApp')
.filter('reverse', function() {
    return function(items) {
        return angular.isArray(items)? items.slice().reverse() : [];
    };
});
