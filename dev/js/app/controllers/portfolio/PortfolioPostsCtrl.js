
/**
 * ******************************************************************************************************
 *
 *   PortfolioPostsCtrl
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

  function PortfolioPostsCtrl($scope, $http, apiPath) {

    $scope.portfolioFeatured = [];
    $scope.portfolioPosts    = [];

    $http.get(apiPath + 'posts/?filter[category_name]=featured&filter[posts_per_page]=2').success(function(res) {

      $scope.portfolioFeatured.push(
        {
          heading: res[0].title,
          desc:    res[0].excerpt,
          date:    res[0].date,
          image:   res[0].featured_image.attachment_meta.sizes.medium_large.url,
          link:    res[0].guid,
          slug:    "portfolio/" + res[0].slug
        }, {
          heading: res[1].title,
          desc:    res[1].excerpt,
          date:    res[1].date,
          image:   res[1].featured_image.attachment_meta.sizes.medium_large.url,
          link:    res[1].guid,
          slug:    "portfolio/" + res[1].slug
        }
      );
    }).error(function(res) {
      console.log('ERROR: ' + res);
    });

    $http.get(apiPath + 'posts/?filter[category_name]=portfolio&filter[posts_per_page]=4').success(function(res) {

      for (var i = 0; i < res.length; i++) {

        if (res[i].featured_image === null) {
          $scope.portfolioPosts.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            date:    res[i].date,
            // image:   null,  TODO NEED A PLACEHOLDER IMAGE
            link:    res[i].guid,
            slug:    "portfolio/" + res[i].slug
          });
        } else {
          $scope.portfolioPosts.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            date:    res[i].date,
            image:   res[i].featured_image.attachment_meta.sizes.medium_large.url,
            link:    res[i].guid,
            slug:    "portfolio/" + res[i].slug
          });
        }
      }
    }).error(function(res) {
      console.log('ERROR: ' + res);
    });
  }

  return ["$scope", "$http", "apiPath", PortfolioPostsCtrl];
});
