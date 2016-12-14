
/**
 * ******************************************************************************************************
 *
 *   MapCtrl
 *
 *   The controller for the map
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function MapCtrl($scope) {

    $scope.map = {
      center: [44.0645355,-79.4286819],
      options: function() {
        return {
          zoom: 15,
          streetViewControl: false,
          scrollwheel: false,
          draggable: false
        }
      }
    };

    $scope.marker = {
      position: [44.0645355,-79.4286819],
      options: function() {
        return {
          visible: true
        }
      }
    };
  }

  return ["$scope", MapCtrl];

})
