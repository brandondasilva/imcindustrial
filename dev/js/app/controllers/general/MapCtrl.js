
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

  function MapCtrl($scope, path) {

    var position = [43.9928955,-79.4575229];

    $scope.map = {
      center: position,
      options: function() {
        return {
          zoom: 15,
          streetViewControl: false,
          scrollwheel: false,
          styles: [
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#812822'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#812822'}]
            }
          ]
        }
      }
    };

    $scope.marker = {
      position: position,
      options: function() {
        return {
          visible: true
        }
      }
    };

    $scope.icons = {
      pin: path + '/images/icons/pin.svg',
      phone: path + '/images/icons/phone.svg'
    };
  }

  return ["$scope", "path", MapCtrl];

})
