
/**
 * ******************************************************************************************************
 *
 *   portfoliocontent
 *
 *   The directive for the content displayed on the portfolio page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function portfoliocontent() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wp-content/themes/imcindustrial/assets/includes/portfolio/content.html'
    }
  }

  return [portfoliocontent];

});
