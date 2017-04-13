'use strict';

define([], function() {

  function homeservices() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wordpress/wp-content/themes/imcindustrial/assets/includes/home/services.html'
    }
  }

  return [homeservices];

});
