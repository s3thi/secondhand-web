'use strict';

angular.module('SecondhandApp')
  .factory('Config', [function() {
    return {
      BASE_API_URL: 'http://127.0.0.1:8000/api/v1/',
      BASE_RESOURCE_URL: 'http://127.0.0.1\\:8000/api/v1/'
    };
  }]);
