
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
        name: "About Us",
        link: "about-us"
      }, {
        name: "Projects",
        link: "projects"
      }, {
        name: "Careers",
        link: "careers"
      }
    ];

    $scope.premus = {
      name: "Premus Inc.",
      path: path + "/images/premus.png"
    }
  }

  return ["$scope", "$http", "path", NavCtrl];

})
