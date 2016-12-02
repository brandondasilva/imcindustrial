'use strict';

define([], function() {

  function servicescta() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/home/servicescta.html'
    }
  }

  return [servicescta];

});
