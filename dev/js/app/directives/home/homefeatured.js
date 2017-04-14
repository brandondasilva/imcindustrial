'use strict';

define([], function() {

  function homefeatured() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'assets/includes/home/featured.html'
    }
  }

  return [homefeatured];

});
