
/**
 * ******************************************************************************************************
 *
 *   contactcontent
 *
 *   The directive for the content displayed on the contact page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function contactcontent() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'assets/includes/contact/content.html'
    }
  }

  return [contactcontent];

});
