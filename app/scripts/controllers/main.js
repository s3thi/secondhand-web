/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .controller('MainCtrl', function ($scope, Project) {
    // Get a list of all projects for this user on view load.
    Project.get({}, function(data) {
      $scope.projects = data.objects;
    });
  });
