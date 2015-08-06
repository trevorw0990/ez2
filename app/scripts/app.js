'use strict';

/**
 * @ngdoc overview
 * @name ez2App
 * @description
 * # ez2App
 *
 * Main module of the application.
 */
angular
  .module('ez2App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/instances', {
        templateUrl: 'views/instances.html',
        controller: 'InstancesCtrl',
        controllerAs: 'instances'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
