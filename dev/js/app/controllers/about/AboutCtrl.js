
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

  function AboutCtrl($scope, $http, getPages) {

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "About") {
          $scope.title = res[i].title;
          $scope.content = res[i].content;
        }
      }
    });
  }

  return ["$scope", "$http", 'getPages', AboutCtrl];

});
