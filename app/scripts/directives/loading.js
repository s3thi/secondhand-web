/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


angular.module('SecondhandApp')
  .directive('shaLoading', function() {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      transclude: true,
      scope: {
        loading: '=shaLoading'
      },
      templateUrl: 'scripts/directives/templates/loading.html',
      link: function(scope, element, attrs) {
        var spinner = new Spinner().spin();
        var loadingContainer = element.find('.sha-loading-spinner-container')[0];
        loadingContainer.appendChild(spinner.el);
      }
    };
  });
