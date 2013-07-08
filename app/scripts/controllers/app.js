'use strict';

//
//  AppController is the parent of all controllers in our app.
//
angular.module('SecondhandApp')
  .controller('AppCtrl', function($scope, $route, ApiToken) {
    // Re-render the page when the 'logged_in' event occurs. This event will
    // mostly be broadcast by the ApiToken service in case of a successful
    // login.
    $scope.$on('logged_in', function(event) {
      $route.reload();
    });

    $scope.haveToken = function() {
      return ApiToken.haveToken();
    };

    $scope.logout = function() {
      ApiToken.logout();
    };
  });
