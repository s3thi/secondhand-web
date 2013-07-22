/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


angular.module('SecondhandApp')
  .controller('LoginCtrl', function($scope, ApiToken) {
    'use strict';

    $scope.working = false;

    $scope.requestApiToken = function() {
      $scope.working = true;

      ApiToken.requestApiToken({
        username: $scope.username,
        password: $scope.password
      });
    };
  });
