'use strict';

angular.module('srpTicketingApp')
.controller('srpFileDialogCtrl', ['$scope', '$dialog', function($scope, $dialog) {

  var dialog = $dialog.dialog({
    backdrop: true,
    keyboard: true,
    backdropClick: true,
    controller: 'srpTestFileDialogController'
  });

  $scope.$on('fileAdded', function (evt, file) {
    alert('opening dialog');
    dialog.open().then(function(result){
      if(result) {
        alert('dialog closed with result: ' + result);
      }
    });
  });

  $scope.open = function(){
    dialog.open().then(function(result){
      if(result) {
        alert('dialog closed with result: ' + result);
      }
    });
  };
}]);

// the dialog is injected in the specified controller
function srpTestFileDialogController($scope, dialog){
  $scope.close = function(result){
    dialog.close(result);
  };
}