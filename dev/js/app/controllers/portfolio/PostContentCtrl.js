
/**
 * ******************************************************************************************************
 *
 *   PostContentCtrl
 *
 *   This controller retrieves the contents of the individual posts by passing
 *   the slug through the stateParams.
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

 'use strict';

define([], function() {

  function PostContentCtrl($scope, $http, $stateParams, apiPath, SetTitle) {

    var path = apiPath + "posts?filter[category_name]=portfolio&";

    $http.get(path + 'filter[name]=' + $stateParams.slug).success(function(res) {

      $scope.postContent = res[0];
      $scope.postCategories = res[0].terms.category;

      // Set Page Title
      SetTitle.setTitle($scope.postContent.title + ' | IMC Industrial Inc.');

      $http.get(apiPath + 'media?filter[post_parent]=' + res[0].ID).success(function(res2) {
        if ( res2.length >= 1 ) {
          $scope.media = res2;
        }
      });
    });

    $scope.latest = [];

    $http.get(path + 'filter[posts_per_page]=3').success(function(res) {

      for (var i = 0; i < res.length; i++) {

        if (res[i].featured_image === null) {
          $scope.latest.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            date:    res[i].date,
            // image:   null,  TODO NEED A PLACEHOLDER IMAGE
            link:    res[i].guid,
            slug:    "portfolio/" + res[i].slug
          });
        } else {
          $scope.latest.push({
            heading: res[i].title,
            desc:    res[i].excerpt,
            date:    res[i].date,
            image:   res[i].featured_image.attachment_meta.sizes.medium_large.url,
            link:    res[i].guid,
            slug:    "portfolio/" + res[i].slug
          });
        }
      }
    }).error(function(err) {
      console.log("ERROR: " + err);
    });
   }

   return ["$scope", "$http", "$stateParams", "apiPath", "SetTitle", PostContentCtrl];

 })
