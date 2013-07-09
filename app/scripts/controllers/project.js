/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('ProjectCtrl', function($scope, $routeParams, Project, Task) {
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
  });
