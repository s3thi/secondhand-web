/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


//
// LoginCtrl is responsible for logging the user in.
//
angular.module('SecondhandApp')
  .controller('LoginCtrl', function($scope, ApiToken) {
    $scope.requestApiToken = function() {
      ApiToken.requestApiToken({
        username: $scope.username,
        password: $scope.password
      });
    };
  });
