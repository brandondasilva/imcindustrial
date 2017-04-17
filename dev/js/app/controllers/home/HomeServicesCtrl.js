
/**
 * ******************************************************************************************************
 *
 *   HomeServicesCtrl
 *
 *   The controller for the services section on the home page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function HomeServicesCtrl($scope, path) {

    $scope.services = [
      {
        heading: 'Rigging',
        image: path + '/images/pipes.png',
      }, {
        heading: 'Fabrication',
        image: path + '/images/welder.png',
      }, {
        heading: 'Millwrighting',
        image: path + '/images/workers.png',
      }, {
        heading: 'Machining',
        image: path + '/images/workers.png',
      }, {
        heading: 'Design',
        image: path + '/images/workers.png',
      }
    ];

  }

  return ["$scope", "path", HomeServicesCtrl];

});
