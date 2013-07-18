/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('TimerCtrl', function($scope, WorkSession, SessionTimer) {
    $scope.SessionTimer = SessionTimer;
    $scope.savingWorkSession = false;

    $scope.endWorkSession = function() {
      $scope.savingWorkSession = true;
      SessionTimer.pauseTimer();

      var session = new WorkSession({
        task: SessionTimer.currentTask.resource_uri,
        start_time: SessionTimer.startTime,
        end_time: SessionTimer.endTime
      });

      session.$save(function(result) {
        SessionTimer.resetTimer();
        $scope.savingWorkSession = false;
      });
    };

    $scope.sidebarActive = function() {
      return SessionTimer.running || $scope.savingWorkSession;
    };
  });
