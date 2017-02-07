
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

  function HomeBannerCtrl($scope, $http, apiPath) {

    $http.get(apiPath_v1).success(function(res) {
      // console.log(res.routes)
      // console.log(res.routes["/wp/v2/settings"].endpoints[1].args.title)
      $scope.name = res.name;
      $scope.description = res.description;
    }).error(function() {

      $scope.name = "IMC Industrial";
      $scope.description = "Industrial Solutions for SME's"
    });
  }

  return ["$scope", "$http", "apiPath", HomeBannerCtrl];

});
