'use strict';

angular.module('SecondhandApp')
  .controller('MainCtrl', function ($scope, Project) {
    // Get a list of all projects for this user on view load.
    Project.get({}, function(data) {
      $scope.projects = data.objects;
    });
  });
