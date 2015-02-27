'use strict';

describe('Controller: ConferencesCtrl', function () {

  // load the controller's module
  beforeEach(module('vagrantApp'));

  var ConferencesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConferencesCtrl = $controller('ConferencesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
