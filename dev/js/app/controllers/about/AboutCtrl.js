
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

  function AboutCtrl($scope, $http, getPages, SetTitle) {

    // Set Page Title
    SetTitle.setTitle('About | IMC Industrial Inc.');

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "About Us") {
          $scope.title = res[i].title;
          $scope.featuredImage = res[i].featured_image.attachment_meta.sizes.large.url;
          $scope.content = res[i].content;
        }
      }
    }).error(function(res) {
      console.log('page not found! ' + res)
    });
  }

  return ["$scope", "$http", 'getPages', 'SetTitle', AboutCtrl];

});
