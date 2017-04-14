
/**
 * ******************************************************************************************************
 *
 *   navbar Directive
 *
 *   Directive for the navbar template
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function navbar() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'assets/includes/general/navbar.html'
    }
  }

  return [navbar];

});
