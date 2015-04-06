'use strict';

/**
 * @ngdoc function
 * @name happyGameManageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the happyGameManageApp
 */
angular.module('happyGameManageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
