/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


angular.module('SecondhandApp')
  .controller('MainCtrl', function ($scope, $dialog, Project) {
    'use strict';

    $scope.viewLoading = true;

    // Get a list of all projects for this user on view load.
    Project.get({}, function(data) {
      $scope.projects = data.objects;
      $scope.viewLoading = false;
    });

    var createProject = function(projectName) {
      if (projectName) {
        var p = new Project({
          name: projectName
        });

        p.$save(function(result) {
          $scope.projects.push(result);
        });
      }
    };

    $scope.showAddProjectDialog = function() {
      var d = $dialog.dialog({
        dialogFade: false,
        templateUrl: 'views/dialogs/new_project.html',
        controller: 'NewItemDialogCtrl'
      });

      d.open().then(createProject);
    };
  });
