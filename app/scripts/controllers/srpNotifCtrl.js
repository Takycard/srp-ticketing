'use strict';

angular.module('srpTicketingApp')
.controller('NotifCtrl', function ($scope) {
    $scope.alerts = [];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Des clients attendent votre réponse !'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});