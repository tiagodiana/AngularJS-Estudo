'use strict';

angular.module('myApp.formulario', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/formulario', {
    templateUrl: 'formulario/formulario.html',
    controller: 'FormularioCtrl'
  });
}])

.controller('FormularioCtrl', ['$scope', function($scope) {
    $scope.validate = false;
    $scope.loading = false;
    $scope.user = {
        nome: '',
        idade: '',
        telefone: '',
        cidade: ''
    };

    $scope.saveUser = function () {
        $scope.validate = true;
        $scope.loading = true;
        if ($scope.user.nome === '')
        {
            return;
        }

    };
}]);
