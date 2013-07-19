/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('ProjectCtrl', function($scope, $routeParams, $q, $dialog, Project, Task, SessionTimer) {
    $scope.viewLoading = true;
    $scope.project_id = $routeParams.projectId;
    $scope.SessionTimer = SessionTimer;

    // TODO: have to mess around with promises myself. I should definitely consider Restangular now.

    var getParentProject = function() {
      var deferred = $q.defer();

      Project.get({ id: $scope.project_id }, function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    var getTasks = function() {
      var deferred = $q.defer();

      Task.get({ project__id: $scope.project_id }, function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    $q.all([getParentProject(), getTasks()]).then(function(data) {
      $scope.parentProject = data[0];
      $scope.tasks = data[1].objects;

      $scope.viewLoading = false;
    });

    // TODO: how can I be more DRY here? This is the same code that I have in main.js.
    var createTask = function(taskName) {
      if (taskName) {
        var t = new Task({
          name: taskName,
          project: $scope.parentProject.resource_uri
        });

        t.$save(function(result) {
          $scope.tasks.push(result);
        });
      }
    };

    $scope.showAddTaskDialog = function() {
      var d = $dialog.dialog({
        dialogFade: false,
        templateUrl: 'views/dialogs/new_task.html',
        controller: 'NewItemDialogCtrl'
      });

      d.open().then(createTask);
    };
  });
