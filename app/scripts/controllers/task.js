/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


angular.module('SecondhandApp')
  .controller('TaskCtrl', function($scope, $routeParams, $q, Project, Task, WorkSession, SessionTimer) {
    'use strict';

    $scope.task_id = $routeParams.taskId;
    $scope.viewLoading = true;
    $scope.SessionTimer = SessionTimer;

    var toLocalTimezone = function(sessions) {
      // TODO: move this out from this scope.
      for (var i = 0; i < sessions.length; i++) {
        sessions[i].start_time_local = new Date(sessions[i].start_time);
        sessions[i].end_time_local = new Date(sessions[i].end_time);
      }
    };

    var getTask = function() {
      var deferred = $q.defer();

      Task.get({
        id: $scope.task_id
      }, function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    var getParentProject = function(task) {
      var deferred = $q.defer();

      Project.get({
        id: task.project_id
      }, function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    var getWorkSessions = function() {
      var deferred = $q.defer();

      WorkSession.get({
        task__id: $scope.task_id
      }, function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    var taskAndProjectPromise = getTask().then(function(data) {
      $scope.task = data;
      return getParentProject(data);
    });

    $q.all([taskAndProjectPromise, getWorkSessions()]).then(function(data) {
      $scope.parentProject = data[0];
      $scope.workSessions = data[1].objects;
      toLocalTimezone($scope.workSessions);

      $scope.viewLoading = false;
    });
  });
