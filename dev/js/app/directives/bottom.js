'use strict';

define([], function() {

  function bottom() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/bottom.html'
    }
  }

  return [bottom];

});
