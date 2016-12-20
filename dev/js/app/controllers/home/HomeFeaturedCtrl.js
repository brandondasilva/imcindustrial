
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

  function HomeFeaturedCtrl($scope, $http, path) {

    $http.get('wp-json/posts/?filter[category_name]=featured').success(function(res) {

      $scope.result = res;
      $scope.featured = [];

      console.log($scope.result)

      for (var i = 0; i < $scope.result.length; i++) {
        $scope.featured.push({
          heading: $scope.result[i].title,
          desc: $scope.result[i].excerpt,
          image: $scope.result[i].featured_image.attachment_meta.sizes.medium.url,
          link: $scope.result[i].guid
        });
      }

      console.log($scope.featured);
    });

  }

  return ["$scope", "$http", "path", HomeFeaturedCtrl];

});
