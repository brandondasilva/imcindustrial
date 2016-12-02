'use strict';

define([], function() {

  function homefeatured() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/home/homefeatured.html'
    }
  }

  return [homefeatured];

});
