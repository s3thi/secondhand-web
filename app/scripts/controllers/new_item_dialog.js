/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


angular.module('SecondhandApp')
  .controller('NewItemDialogCtrl', function ($scope, dialog) {
    'use strict';

    $scope.close = function(result) {
      dialog.close(result);
    };
  });
