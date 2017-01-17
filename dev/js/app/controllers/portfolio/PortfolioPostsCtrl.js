
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

  function PortfolioPostsCtrl($scope, $http) {

    $scope.portfolioFeatured = [];
    $scope.portfolioPosts    = [];

    $http.get('https://hidden-inlet-49886.herokuapp.com').success(function(res) {
      console.log(res);
    }).error(function(res) {
      console.log('fail');
    });

    $http.get('index.php/wp-json/posts/?filter[category_name]=featured&filter[posts_per_page]=2').success(function(res) {

      $scope.portfolioFeatured.push(
        {
          heading: res[0].title,
          desc:    res[0].excerpt,
          image:   res[0].featured_image.attachment_meta.sizes.medium_large.url,
          link:    res[0].guid
        }, {
          heading: res[1].title,
          desc:    res[1].excerpt,
          image:   res[1].featured_image.attachment_meta.sizes.medium_large.url,
          link:    res[1].guid
        }
      );
    }).error(function(res) {
      console.log('ERROR: ' + res);
    });

    $http.get('index.php/wp-json/posts/?filter[category_name]=portfolio&filter[posts_per_page]=4').success(function(res) {

      for (var i = 0; i < res.length; i++) {

        if (res[i].featured_image === null) {
          $scope.portfolioPosts.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            // image:   null,
            link:    res[i].guid
          });
        } else {
          $scope.portfolioPosts.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            // image:   res[i].featured_image.attachment_meta.sizes.medium_large.url,
            link:    res[i].guid
          });
        }
      }
    }).error(function(res) {
      console.log('ERROR: ' + res);
    });
  }

  return ["$scope", "$http", PortfolioPostsCtrl];
});
