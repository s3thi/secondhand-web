/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('TimerCtrl', function($scope, SessionTimer) {
    $scope.SessionTimer = SessionTimer;
  });
