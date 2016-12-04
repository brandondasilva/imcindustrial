'use strict';

define([], function() {

  function homefeatured() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/home/featured.html'
    }
  }

  return [homefeatured];

});
