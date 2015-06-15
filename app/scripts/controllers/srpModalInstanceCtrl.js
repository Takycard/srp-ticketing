'use strict';

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('srpTicketingApp')
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, myData) {

    $scope.myData = myData;

    $modalInstance.setMyData = function(theData) {
        $scope.myData = theData;
    };

    $scope.ok = function () {
        $modalInstance.close($scope.myData);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});