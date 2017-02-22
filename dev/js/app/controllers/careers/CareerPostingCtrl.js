
/**
 * ******************************************************************************************************
 *
 *   CareerPostingCtrl
 *
 *   The controller for the contact page content pulled from WP
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function CareerPostingCtrl(
    $scope,
    $http,
    $stateParams,
    getPages,
    apiPath,
    SetTitle
  ) {

    var path = apiPath + "posts?filter[category_name]=careers&";

    $http.get(path + 'filter[name]=' + $stateParams.slug).success(function(res) {
      $scope.postContent = res[0];

      // Set Page Title
      SetTitle.setTitle($scope.postContent.title + ' | IMC Industrial Inc.');
    }).error(function(err) {
      console.log("ERROR: " + err);
    });

    $http.get(path + 'filter[posts_per_page]=3').success(function(res) {
      $scope.recentPostings = res;
    }).error(function(err) {
      console.log("ERROR: " + err);
    });


  }

  return [
    "$scope",
    "$http",
    "$stateParams",
    "getPages",
    "apiPath",
    "SetTitle",
    CareerPostingCtrl
  ];

});
