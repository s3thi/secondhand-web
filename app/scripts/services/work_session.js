'use strict';

//
// The WorkSession resource.
//
angular.module('SecondhandApp')
  .factory('WorkSession', ['$resource', 'Config', function($resource, Config) {
    var WorkSession = $resource(Config.BASE_RESOURCE_URL + 'workSession/:id');
    return WorkSession;
  }]);
