'use strict';

//
// The Project resource.
//
angular.module('SecondhandApp')
  .factory('Project', ['$resource', 'Config', function($resource, Config) {
    var Project = $resource(Config.BASE_RESOURCE_URL + 'project/:id');
    return Project;
  }]);
