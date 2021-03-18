'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.formulario',
  'myApp.httpRequest',
  'myApp.version'
])

.factory('Api', function () {
  return {
    url: 'https://api-search-marketplace.herokuapp.com'
  };
})

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
