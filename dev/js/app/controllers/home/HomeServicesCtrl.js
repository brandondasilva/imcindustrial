
/**
 * ******************************************************************************************************
 *
 *   HomeServicesCtrl
 *
 *   The controller for the services section on the home page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function HomeServicesCtrl(
    $scope,
    $http,
    apiPath
  ) {

    $http.get(apiPath + 'posts/?filter[category_name]=services&?filter[posts_per_page]=-1').then(function(res) {

      $scope.services = [];

      for (var i = 0; i < res.data.length; i++) {

        $scope.services.push({
          heading: res.data[i].title,
          image: res.data[i].featured_image.attachment_meta.sizes.medium.url
        })
      }

    }, function(err) {
      console.log('ERROR RETRIEVING SERVICES');
      console.log('Response: ' + err);
    });

  }

  return [
    "$scope",
    "$http",
    "apiPath",
    HomeServicesCtrl
  ];

});
