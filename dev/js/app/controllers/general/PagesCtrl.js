
/**
 * ******************************************************************************************************
 *
 *   PagesCtrl
 *
 *   The controller for the portfolio page content pulled from WP
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function PagesCtrl(
    $scope,
    $http,
    $state,
    apiPath,
    SetTitle
  ) {

    var path = apiPath + "pages/";

    $http.get(path + $state.current.name).then(function(res) {
      $scope.title = res.data.title;
      $scope.featuredImage = res.data.featured_image.attachment_meta.sizes.large.url;
      $scope.content = res.data.content;

      // Setting Page Title and Meta Description
      SetTitle.setTitle($scope.title + ' | IMC Industrial Inc.');
      SetTitle.setSEO(res.data.seo);
    }, function(err) {
      console.log("ERROR: " + err)
    })

  }

  return [
    "$scope",
    "$http",
    "$state",
    "apiPath",
    "SetTitle",
    PagesCtrl
  ];

});
