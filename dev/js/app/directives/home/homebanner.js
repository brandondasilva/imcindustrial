'use strict';

define([], function() {

  function homebanner() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/home/banner.html'
    }
  }

  return [homebanner];

});
