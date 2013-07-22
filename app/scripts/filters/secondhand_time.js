/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


angular.module('SecondhandApp')
  .filter('secondhand_time', function() {
    'use strict';

    return function(ms) {
      ms = parseInt(ms, 10);

      var hours = Math.floor(ms / (60*60*1000));
      var minutes = Math.floor((ms - hours*60*60*1000) / (1000*60));
      var seconds = Math.floor((ms - minutes*60*1000) / 1000);

      if (hours   < 10) { hours   = '0' + hours;   }
      if (minutes < 10) { minutes = '0' + minutes; }
      if (seconds < 10) { seconds = '0' + seconds; }

      return (hours + ':' + minutes + ':' + seconds);
    };
  });
