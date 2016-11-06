
'use strict';

define([], function() {

  var ServicesCTACtrl = function($scope) {
    $scope.services = [
      {
        heading: 'IMC',
        desc: "Industrial Solutions",
        image: '/assets/images/pipes.png',
        link: ''
      }, {
        heading: 'Fabricators',
        desc: "IMC Industrial Fabricators are certified stainless steel welders",
        image: '/assets/images/welder.png',
        link: ''
      }, {
        heading: 'Millwrighting',
        desc: "IMC Industrial Millwrights have years of experience in the Food, Beverage, and Ride Industry",
        image: '/assets/images/workers.png',
        link: ''
      }
    ];
  }

  // NavCtrl.$inject = ['$scope'];

  return ["$scope", ServicesCTACtrl];

  // return ServicesCTACtrl;
});
