//
// LoginCtrl is responsible for logging the user in.
//
angular.module('SecondhandApp')
  .controller('LoginCtrl', function($scope, ApiToken) {
    $scope.requestApiToken = function() {
      ApiToken.requestApiToken({
        username: $scope.username,
        password: $scope.password
      });
    };
  });
