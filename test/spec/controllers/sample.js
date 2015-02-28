'use strict';

describe('Controller: SampleCtrl', function () {

  // load the controller's module
  beforeEach(module('vagrantApp'));

  var SampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleCtrl = $controller('SampleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
