'use strict';

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('srpTicketingApp')
    .controller('ModalInstanceCtrl', function ($scope, ticket, index, statutList, newResponse, ngDialog) {
    // Initialize scope
    $scope.ticket = ticket;
    $scope.index = index;
    $scope.newResponse = newResponse;
    $scope.statutList = statutList;

    console.log(ticket);
    $scope.cancel = function () {
        ngDialog.closeAll();
    };

    $scope.ok = function () {
        ngDialog.confirm();
    };
});