
/**
 * ******************************************************************************************************
 *
 *   MainCtrl
 *
 *   The controller for the banner section on the home page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function MainCtrl($scope, SetTitle) {

    $scope.SetTitle = SetTitle;
  }

  return ["$scope", "SetTitle", MainCtrl];

});
