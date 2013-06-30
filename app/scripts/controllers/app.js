'use strict';

//
//  AppController is the parent of all controllers in our app.
//
angular.module('SecondhandApp')
  .controller('AppCtrl', function($scope, $location, ApiToken) {

    // Let the user navigate to a secure route only if we have a valid API
    // token.
    $scope.$on('$routeChangeStart', function(event, next, current) {
      if (next.$$route && next.$$route.secure === true) {
        if (!ApiToken.haveToken()) {
          $location.path('/login');
        }
      }
    });

    // Go to the login page in case an 'unauthenticated' event occurs.
    // This event will mostly be broadcast by the authInterceptor if the server
    // returns a 401 response for any request.
    $scope.$on('unauthenticated', function(event) {
      ApiToken.clearToken();
      $location.path('/login');
    });

    // Go to the main page when the 'logged_in' event occurs. This event will
    // mostly be broadcast by the ApiToken service in case of a successful
    // login.
    $scope.$on('logged_in', function(event) {
      $location.path('/');
    });
  });
