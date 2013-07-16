/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('ProjectCtrl', function($scope, $routeParams, $dialog, Project, Task) {
    $scope.project_id = $routeParams.projectId;

    // Get the details of the parent project on view load.
    Project.get({
      id: $scope.project_id
    }, function(data) {
      $scope.parentProject = data;
    });

    // Get a list of tasks for the parent project on view load.
    Task.get({
      project__id: $scope.project_id
    }, function(data) {
      $scope.tasks = data.objects;
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
