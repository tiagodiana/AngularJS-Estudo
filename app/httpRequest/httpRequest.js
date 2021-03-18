'use strict';

angular.module('myApp.httpRequest', ['ngRoute'])

.config(['$routeProvider', function ($routerProvider) {
    $routerProvider.when('/httpreq', {
        templateUrl: 'httpRequest/httpRequest.html',
        controller: 'HttpCtrl'
    });
}])

.controller('HttpCtrl', ['$scope','$http','Api', function ($scope, $http, Api) {
    $scope.loading = true;
    $scope.researches = [];

    $http({
        method: 'GET',
        url: Api.url+'/researches',
    }).then(
        function successCallback(response)
        {
            $scope.researches = response.data;
            $scope.loading = false;
        },
        function errorCallback(response)
        {
            $scope.loading = false;
        }
    );

}]);

