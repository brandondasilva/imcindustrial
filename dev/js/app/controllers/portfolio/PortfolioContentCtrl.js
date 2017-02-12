
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

  function PortfolioContentCtrl($scope, $http, getPages, SetTitle) {

    // Setting Page Title
    SetTitle.setTitle('Portfolio | IMC Industrial Inc.');

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "Portfolio") {
          $scope.title = res[i].title;
          $scope.featuredImage = res[i].featured_image.attachment_meta.sizes.large.url;
          $scope.content = res[i].content;
        }
      }
    });
  }

  return ["$scope", "$http", "getPages", "SetTitle", PortfolioContentCtrl];

});
