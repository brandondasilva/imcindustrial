
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
        heading: 'IMC',
        desc: "Industrial Solutions",
        image: path + '/images/pipes.png',
        link: '#'
      }, {
        heading: 'Fabricators',
        desc: "IMC Industrial Fabricators are certified stainless steel welders",
        image: path + '/images/welder.png',
        link: '#'
      }, {
        heading: 'Millwrighting',
        desc: "IMC Industrial Millwrights have years of experience in the Food, Beverage, and Ride Industry",
        image: path + '/images/workers.png',
        link: '#'
      }
    ];
  }

  return ["$scope", "path", HomeServicesCtrl];

});
