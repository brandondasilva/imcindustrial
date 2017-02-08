'use strict';

define([], function() {

  function homeservices() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'assets/includes/home/services.html'
    }
  }

  return [homeservices];

});
