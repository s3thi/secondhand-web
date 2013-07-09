/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

//
// The WorkSession resource.
//
angular.module('SecondhandApp')
  .factory('WorkSession', ['$resource', 'Config', function($resource, Config) {
    var WorkSession = $resource(Config.BASE_RESOURCE_URL + 'workSession/:id');
    return WorkSession;
  }]);
