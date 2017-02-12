
/**
 * ******************************************************************************************************
 *
 *   NavCtrl
 *
 *   The controller for navigation
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function NavCtrl($scope, $http, path) {

    $scope.home = {
      name: "Home",
      path: path + "/images/logo.png",
      link: "main"
    }

    $scope.items = [
      {
        name: "About",
        link: "about"
      }, {
        name: "Portfolio",
        link: "portfolio"
      }, {
        name: "Contact",
        link: "contact"
      },
    ];

    $scope.careers = {
      name: "Careers",
      link: "careers"
    }

    $scope.premus = {
      name: "Premus Inc.",
      path: path + "/images/premus.png"
    }
  }

  return ["$scope", "$http", "path", NavCtrl];

})
