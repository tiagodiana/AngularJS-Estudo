'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl',  ['$scope','$http','Api', function ($scope, $http, Api) {
    $scope.loading = false;
    $scope.searchForm = {
        query: '',
        site: 'ml'
    };

    $scope.sendForm = function () {
        $scope.loading = true;
        $http({
            method: 'POST',
            url: Api.url + '/queryMarketplace',
            data: $scope.searchForm
        }).then(
            function successCallback(response)
            {
                console.log(response);
                $scope.loading = false;
            },
            function errorCallback(error)
            {
                console.log(error);
                $scope.loading = false;
            }
        );
    };


}]);
