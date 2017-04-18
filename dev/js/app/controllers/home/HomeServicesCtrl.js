
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

  function HomeServicesCtrl($scope, $http, path, apiPath) {

    $http.get(apiPath + 'posts/?filter[category_name]=services&?filter[posts_per_page]=-1').then(function(res) {

      console.log(res.data)
      $scope.services = [];

      for (var i = 0; i < res.data.length; i++) {

        $scope.services.push({
          heading: res.data[i].title,
          image: res.data[i].featured_image.attachment_meta.sizes.medium.url
        })
      }

    }, function(err) {

    });

    // $scope.services = [
    //   {
    //     heading: 'Rigging',
    //     image: path + '/images/pipes.png',
    //   }, {
    //     heading: 'Fabrication',
    //     image: path + '/images/welder.png',
    //   }, {
    //     heading: 'Millwrighting',
    //     image: path + '/images/workers.png',
    //   }, {
    //     heading: 'Machining',
    //     image: path + '/images/workers.png',
    //   }, {
    //     heading: 'Design',
    //     image: path + '/images/workers.png',
    //   }
    // ];

  }

  return ["$scope", "$http", "path", "apiPath", HomeServicesCtrl];

});
