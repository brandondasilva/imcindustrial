
'use strict';

define([], function() {

  var ServicesCTACtrl = function($scope) {
    $scope.services = [
      {
        heading: 'IMC',
        desc: "Industrial Solutions",
        image: '<?php bloginfo("template_directory"); ?>/images/file.png',
        link: ''
      }, {
        heading: 'Fabricators',
        desc: "IMC Industrial Fabricators are certified stainless steel welders",
        image: '<?php bloginfo("template_directory"); ?>/images/file.png',
        link: ''
      }, {
        heading: 'Millwriting',
        desc: "IMC Industrial Millwrights have years of experience in the Food, Beverage, and Ride Industry",
        image: '<?php bloginfo("template_directory"); ?>/images/file.png',
        link: ''
      }
    ];
  }

  // NavCtrl.$inject = ['$scope'];

  return ["$scope", ServicesCTACtrl];

  // return ServicesCTACtrl;
});
