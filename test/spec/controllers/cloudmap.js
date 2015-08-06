'use strict';

describe('Controller: CloudmapCtrl', function () {

  // load the controller's module
  beforeEach(module('ez2App'));

  var CloudmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CloudmapCtrl = $controller('CloudmapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CloudmapCtrl.awesomeThings.length).toBe(3);
  });
});
