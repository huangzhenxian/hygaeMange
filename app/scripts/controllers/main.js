'use strict';

/**
 * @ngdoc function
 * @name happyGameManageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happyGameManageApp
 */
angular.module('happyGameManageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
