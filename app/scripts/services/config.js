/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

angular.module('SecondhandApp')
  .factory('Config', [function() {
    return {
      BASE_API_URL: 'http://127.0.0.1:8000/api/v1/',
      BASE_RESOURCE_URL: 'http://127.0.0.1\\:8000/api/v1/'
    };
  }]);
