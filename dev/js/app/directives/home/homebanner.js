'use strict';

define([], function() {

  function homebanner() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wordpress/wp-content/themes/imcindustrial/assets/includes/home/banner.html'
    }
  }

  return [homebanner];

});
