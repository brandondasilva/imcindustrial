
/**
 * ******************************************************************************************************
 *
 *   HomeBannerCtrl
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

  function HomeBannerCtrl($scope, $http) {

    $http.get('wp-json').success(function(res) {

      $scope.name = res.name;
      $scope.description = res.description;
    }).error(function() {

      $scope.name = "IMC Industrial";
      $scope.description = "Industrial Solutions for SME's"
    });
  }

  return ["$scope", "$http", HomeBannerCtrl];

});
