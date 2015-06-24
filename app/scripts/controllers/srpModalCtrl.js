'use strict';

angular.module('srpTicketingApp')
    .controller('ModalCtrl', ['srpCreateTckt', function ($scope, srpCreateTckt, $modal, $timeout) {

        //        $scope.animationsEnabled = true;
        //
        //        $scope.open = function () {
        //
        //            var modalInstance = $modal.open({
        //                animation: $scope.animationsEnabled,
        //                templateUrl: 'myModalContent.html',
        //                controller: 'ModalInstanceCtrl',
        //                resolve: {
        //                    myData: function () {
        //                        return modalInstance.getMyData();
        //                    }
        //                }
        //            });
        //
        //            modalInstance.opened.then(function() {
        //                $scope.loadData(modalInstance);
        //
        //            }, function() {
        //                console.log('Modal dismissed at: ' + new Date());
        //            });
        //        };
        //        console.log($scope.open());
        //        $scope.loadData = function(aModalInstance) {
        //            console.log("starts loading");
        //            $timeout(function() {
        //                console.log("data loaded");
        //                aModalInstance.setMyData("data loaded...");
        //            }, 3000);
        //        };
        //        //        modalInstance.result.then(function (selectedItem) {
        //        //            $scope.selected = selectedItem;
        //        //        }, function () {
        //        //            console.log('Modal dismissed at: ' + new Date());
        //        //        });
        //        //    };
        //
        //        $scope.toggleAnimation = function () {
        //            $scope.animationsEnabled = !$scope.animationsEnabled;
        //        };
    }]);