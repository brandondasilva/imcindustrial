
/**
 * ******************************************************************************************************
 *
 *   CareersContentCtrl
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

  function CareersContentCtrl($scope, getPages, SetTitle) {

    // Set Page Title
    SetTitle.setTitle('Careers | IMC Industrial Inc.');

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "Careers") {
          $scope.featuredImage = res[i].featured_image.attachment_meta.sizes.large.url;
        }
      }
    });

  }

  return ["$scope", "getPages", "SetTitle", CareersContentCtrl];

});
