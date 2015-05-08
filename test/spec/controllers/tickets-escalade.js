'use strict';

describe('Controller: TicketsEscaladeCtrl', function () {

  // load the controller's module
  beforeEach(module('srpTicketingApp'));

  var TicketsEscaladeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketsEscaladeCtrl = $controller('TicketsEscaladeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
