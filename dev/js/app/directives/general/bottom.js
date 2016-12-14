
/**
 * ******************************************************************************************************
 *
 *   bottom Directive
 *
 *   The directive for the footer of the website
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function bottom() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/general/bottom.html'
    }
  }

  return [bottom];

});
