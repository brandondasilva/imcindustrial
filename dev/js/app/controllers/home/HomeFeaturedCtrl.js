
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

  function HomeFeaturedCtrl($scope, $http, apiPath) {

    $scope.slides = [];

    $http.get(apiPath + 'posts/?filter[category_name]=featured&filter[posts_per_page]=5').success(function(res) {

      for (var i = 0; i < res.length; i++) {

        if (res[i].featured_image === null) {
          $scope.slides.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            date:    res[i].date,
            image:   null,
            slug:    'portfolio/' + res[i].slug
          });
        } else {
          $scope.slides.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            date:    res[i].date,
            image:   res[i].featured_image.attachment_meta.sizes.medium_large.url,
            slug:    'portfolio/' + res[i].slug
          });
        }
      }
    });

  }

  return ["$scope", "$http", "apiPath", HomeFeaturedCtrl];

});
