'use strict';

/**
 * @ngdoc function
 * @name ez2App.controller:InstancesCtrl
 * @description
 * # InstancesCtrl
 * Controller of the ez2App
 */
 angular.module('ez2App')
 .controller('InstancesCtrl', function ($scope, $http) {


 	$scope.instances= {};
 	$http.get('http://localhost:8080/instances/all').success(function(data) {
 	$scope.instances = data;
 	}); 

 });
