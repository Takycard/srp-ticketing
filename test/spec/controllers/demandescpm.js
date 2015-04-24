'use strict';

describe('Controller: DemandescpmCtrl', function () {

  // load the controller's module
  beforeEach(module('srpTicketingApp'));

  var DemandescpmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemandescpmCtrl = $controller('DemandescpmCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
