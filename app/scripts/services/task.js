'use strict';

//
// The Task resource.
//
angular.module('SecondhandApp')
  .factory('Task', ['$resource', 'Config', function($resource, Config) {
    var Task = $resource(Config.BASE_RESOURCE_URL + 'task/:id');
    return Task;
  }]);
