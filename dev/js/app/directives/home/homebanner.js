'use strict';

define([], function() {

  function homebanner() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'assets/includes/home/banner.html'
    }
  }

  return [homebanner];

});
