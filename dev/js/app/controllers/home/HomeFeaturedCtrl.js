
/**
 * ******************************************************************************************************
 *
 *   HomeFeaturedCtrl
 *
 *   The controller for the featured projects section on the home page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function HomeFeaturedCtrl($scope, $http) {

    $scope.slides = [];

    $http.get('wp-json/posts/?filter[category_name]=featured&filter[posts_per_page]=5').success(function(res) {

      $scope.result = res;

      for (var i = 0; i < $scope.result.length; i++) {

        if ($scope.result[i].featured_image === null) {
          $scope.slides.push({
            heading: $scope.result[i].title,
            desc: $scope.result[i].excerpt,
            image: null,
            link: $scope.result[i].guid
          });
        } else {
          $scope.slides.push({
            heading: $scope.result[i].title,
            desc: $scope.result[i].excerpt,
            image: $scope.result[i].featured_image.attachment_meta.sizes.medium_large.url,
            link: $scope.result[i].guid
          });
        }
      }
    });

  }

  return ["$scope", "$http", HomeFeaturedCtrl];

});
