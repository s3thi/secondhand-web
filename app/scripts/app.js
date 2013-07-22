/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


angular.module('SecondhandApp', ['ngResource', 'ui.bootstrap.dialog'])
  .config(function ($routeProvider, $httpProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        secure: true
      })
      .when('/project/:projectId', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        secure: true
      })
      .when('/task/:taskId', {
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl',
        secure: true
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl',
        secure: true
      })
      .otherwise({
        redirectTo: '/'
      });

    //  TODO: turn on HTML5 mode when serving via nginx.
    //  $locationProvider.html5Mode(true);

    var authInterceptor = function ($rootScope, $location, $q) {
      // The authInterceptor intercepts every HTTP response. If the server sends
      // back a 401, it means that we do not have an API token to send to the
      // server, or that our API token has expired. In that case, the interceptor
      // broadcasts an 'unauthenticated' event. Otherwise, it does nothing.

      function success(response) {
        // Do nothing on success.
        return response;
      }

      function error(response) {
        // Check for 401 on error.
        if (response.status === 401) {
          $rootScope.$broadcast('unauthenticated');
        }

        return $q.reject(response);
      }

      return function(promise) {
        return promise.then(success, error);
      };
    };

    $httpProvider.responseInterceptors.push(authInterceptor);
  });


angular.module('SecondhandApp')
  .run(function ($window, ApiToken, SessionTimer) {
    'use strict';

    // Set the correct authorization headers on app startup. If there is
    // an API token already stored in localStorage, don't make the user login
    // again.
    if (ApiToken.haveToken()) {
      ApiToken.setAuthorizationHeaders(ApiToken.getToken());
    }

    // Don't let the user navigate away from the page if the session timer is running.
    $window.onbeforeunload = function() {
      if (SessionTimer.running) {
        return 'The timer is running. You will lose your current time data if you navigate away from this page';
      }
    };
  });
