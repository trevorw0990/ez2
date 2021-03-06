'use strict';

describe('Controller: InstancesCtrl', function () {

  // load the controller's module
  beforeEach(module('ez2App'));

  var InstancesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstancesCtrl = $controller('InstancesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InstancesCtrl.awesomeThings.length).toBe(3);
  });
});
