/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('LoginCtrl', function($scope, ApiToken) {
    $scope.working = false;

    $scope.requestApiToken = function() {
      $scope.working = true;

      ApiToken.requestApiToken({
        username: $scope.username,
        password: $scope.password
      });
    };
  });
