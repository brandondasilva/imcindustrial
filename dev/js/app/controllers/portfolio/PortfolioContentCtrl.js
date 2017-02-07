
/**
 * ******************************************************************************************************
 *
 *   PortfolioContentCtrl
 *
 *   The controller for the portfolio page content pulled from WP
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function PortfolioContentCtrl($scope, $http, getPages) {

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title.rendered === "Portfolio") {
          $scope.title = res[i].title.rendered;
          $scope.featuredImage = res[i].better_featured_image.media_details.sizes.large.source_url;
          $scope.content = res[i].content.rendered;
        }
      }
    });
  }

  return ["$scope", "$http", 'getPages', PortfolioContentCtrl];

});
