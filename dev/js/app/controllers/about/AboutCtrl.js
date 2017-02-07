
/**
 * ******************************************************************************************************
 *
 *   AboutCtrl
 *
 *   The controller for the about page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function AboutCtrl($scope, $http, getPages) {

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title.rendered === "About") {
          $scope.title = res[i].title.rendered;
          $scope.featuredImage = res[i].better_featured_image.media_details.sizes.large.source_url;
          $scope.content = res[i].content.rendered;
        }
      }
    });
  }

  return ["$scope", "$http", 'getPages', AboutCtrl];

});
