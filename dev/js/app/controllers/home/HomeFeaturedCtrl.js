
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

    $http.get(apiPath + 'posts/?filter[category_name]=featured&?filter[tag]=featured').then(function(res) {

      $http.get(apiPath + 'media/?filter[post_parent]=' + res.data[0].ID + '&?filter[posts_per_page]=-1').then(function(res2) {

        if (res2.data.length >= 1) {

          for (var i = 0; i < res2.data.length; i++) {

            $scope.slides.push({
              image: res2.data[i].attachment_meta.sizes.medium_large.url,
              alt: res2.data[i].title
            });
          }
        }

      }, function(err) {
        console.log('ERROR RETRIEVING MEDIA');
        console.log('Response: ' + err);
      });

    }, function(err) {
      console.log('ERROR RETRIEVING POST');
      console.log('Response: ' + err);
    });

    // $http.get(apiPath + 'pages/').success(function(res) {
    //   console.log(res);
    // })

  }

  return ["$scope", "$http", "apiPath", HomeFeaturedCtrl];

});
