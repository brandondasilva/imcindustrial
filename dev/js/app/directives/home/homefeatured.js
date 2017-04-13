'use strict';

define([], function() {

  function homefeatured() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wordpress/wp-content/themes/imcindustrial/assets/includes/home/featured.html'
    }
  }

  return [homefeatured];

});
