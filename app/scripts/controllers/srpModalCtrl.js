'use strict';

angular.module('srpTicketingApp')
    .controller('ModalCtrl', function ($scope, $modal, $timeout, $log) {

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                myData: function () {
                    return "Chargement...";
                }
            }
        });

        modalInstance.opened.then(function() {
            $scope.loadData(modalInstance);

        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.loadData = function(aModalInstance) {
        $log.info("starts loading");
        $timeout(function() {
            $log.info("data loaded");
            aModalInstance.setMyData("data loaded...");
        }, 3000);
    };
    //        modalInstance.result.then(function (selectedItem) {
    //            $scope.selected = selectedItem;
    //        }, function () {
    //            $log.info('Modal dismissed at: ' + new Date());
    //        });
    //    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});