
/**
 * ******************************************************************************************************
 *
 *   portfolioposts
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

  function portfolioposts() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'wordpress/wp-content/themes/imcindustrial/assets/includes/portfolio/posts.html'
    }
  }

  return [portfolioposts];

});
