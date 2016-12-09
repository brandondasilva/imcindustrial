
/**
 * ******************************************************************************************************
 *
 *   ContactContentCtrl
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

  function ContactContentCtrl($scope, $http, getPages) {

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "Contact") {
          $scope.title = res[i].title;
          $scope.content = res[i].content;
        }
      }
    });
  }

  return ["$scope", "$http", 'getPages', ContactContentCtrl];

});
