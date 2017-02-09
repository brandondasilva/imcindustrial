
/**
 * ******************************************************************************************************
 *
 *   CategoryCtrl
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

  function CategoryCtrl($scope, $http, apiPath, PagerService) {

    $scope.categories = [];

    $http.get(apiPath + 'taxonomies/category/terms').success(function(res) {

      for (var i = 0; i < res.length; i++) {
        if (res[i].parent != null && res[i].parent.slug === "portfolio") {
          $scope.categories.push({
            name: res[i].name,
            link: 'portfolio/c/' + res[i].slug
          })
        }
      }
    });
  }

  return ["$scope", "$http", "apiPath", "PagerService", CategoryCtrl];

});
