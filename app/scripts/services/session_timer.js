/*
  Copyright (c) 2013 Ankur Sethi <contact@ankursethi.in>
  Licensed under the terms of the MIT license.
  See the file LICENSE for copying permissions.
*/


'use strict';

//
// The session timer. This service provides a timer that can be started and
// stopped, and keeps track of the time since the timer was started in
// milliseconds.
//
angular.module('SecondhandApp')
  .factory('SessionTimer', ['$timeout', function($timeout) {
    var SessionTimer = {
      currentTime: 0,
      startTime: null,
      endTime: null,
      currentTask: null,
      currentProject: null,
      running: false
    };

    var updateTimer = function() {
      SessionTimer.currentTime = new Date() - SessionTimer._lastTick;

      if (SessionTimer.running === true) {
        console.log('tick for task ' + SessionTimer.currentTask.name);
        SessionTimer._timeout = $timeout(updateTimer, 1000);
      }
    };

    SessionTimer.startTimer = function(project, task) {
      if (SessionTimer.running) {
        SessionTimer.pauseTimer();
        SessionTimer.resetTimer();
      }

      SessionTimer.currentTask = task;
      SessionTimer.currentProject = project;

      // Bookkeeping.
      SessionTimer.running = true;
      SessionTimer.startTime = new Date();
      SessionTimer._lastTick = SessionTimer.startTime;
      SessionTimer._timeout = $timeout(updateTimer, 1000);
    };

    SessionTimer.pauseTimer = function() {
      SessionTimer.running = false;
      SessionTimer.endTime = new Date();
      $timeout.cancel(SessionTimer._timeout);
    };

    SessionTimer.resetTimer = function() {
      SessionTimer.currentTime = 0;
      delete SessionTimer._lastTick;
    };

    return SessionTimer;
  }]);
