
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

  function HomeBannerCtrl($scope, $http, apiPath, SetTitle) {

    $http.get(apiPath).success(function(res) {
      $scope.name = res.name;
      $scope.description = res.description;

      var seo = {
        wpseo_metadesc: $scope.description,
        wpseo_opengraph_title: $scope.name,
        wpseo_opengraph_description: $scope.description,
        wpseo_opengraph_image: "",
        wpseo_twitter_title: $scope.name,
        wpseo_twitter_description: $scope.description,
        wpseo_twitter_image: ""
      };

      // Setting Page Title
      SetTitle.setTitle($scope.name);
      SetTitle.setSEO(seo);
    }).error(function() {
      $scope.name = "IMC Industrial Inc.";
      $scope.description = "Millwrighting and Fabrication"

      var seo = {
        wpseo_metadesc: $scope.description,
        wpseo_opengraph_title: $scope.name,
        wpseo_opengraph_description: $scope.description,
        wpseo_opengraph_image: "",
        wpseo_twitter_title: $scope.name,
        wpseo_twitter_description: $scope.description,
        wpseo_twitter_image: ""
      };

      // Setting Page Title
      SetTitle.setTitle($scope.name);
      SetTitle.setSEO(seo);
    });
  }

  return ["$scope", "$http", "apiPath", "SetTitle", HomeBannerCtrl];

});
