
/**
 * ******************************************************************************************************
 *
 *   pagescontent
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

  function pagescontent() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'assets/includes/pages/content.html'
    }
  }

  return [pagescontent];

});
