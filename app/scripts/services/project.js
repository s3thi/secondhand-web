/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


//
// The Project resource.
//
angular.module('SecondhandApp')
  .factory('Project', ['$resource', 'Config', function($resource, Config) {
    'use strict';

    var Project = $resource(Config.BASE_RESOURCE_URL + 'project/:id');
    return Project;
  }]);
