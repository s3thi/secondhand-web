/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('TaskCtrl', function($scope, $routeParams, Project, Task, WorkSession) {
    $scope.task_id = $routeParams.taskId;

    var toLocalTimezone = function(sessions) {
      // TODO: move this out from this scope.
      for (var i = 0; i < sessions.length; i++) {
        sessions[i].start_time_local = new Date(sessions[i].start_time);
        sessions[i].end_time_local = new Date(sessions[i].end_time);
      }
    };

    // Get the details of the current task on view load.
    Task.get({
      id: $scope.task_id
    }, function(data) {
      $scope.task = data;

      // Get parent project.
      Project.get({
        id: $scope.task.project_id
      }, function(data) {
        $scope.project = data;
      });
    });

    // Get the list of recent WorkSessions for the current task on view load.
    WorkSession.get({
      task__id: $scope.task_id
    }, function(data) {
      $scope.work_sessions = data.objects;
      toLocalTimezone($scope.work_sessions);
    });
  });
