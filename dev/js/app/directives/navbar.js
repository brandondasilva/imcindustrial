'use strict';

define([], function() {

  function navbar() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/navbar.html'
    }
  }

  return [navbar];

});
