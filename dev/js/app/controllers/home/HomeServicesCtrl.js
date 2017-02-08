
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

    $http.get(apiPath + 'wp/v2/posts/?filter[category_name]=services&filter[tag]=excerpt').success(function(res) {

      $scope.result = res;
      $scope.services = [];

      for (var i = 0; i < $scope.result.length; i++) {
        $scope.services.push({
          heading: $scope.result[i].title,
          desc: $scope.result[i].excerpt,
          image: $scope.result[i].featured_image.attachment_meta.sizes.medium.url,
          link: '#'
        });
      }
    })
    .error(function() {

      $scope.services = [
        {
          heading: 'IMC',
          desc: "Industrial Solutions",
          image: path + '/images/pipes.png',
          link: '#'
        }, {
          heading: 'Fabricators',
          desc: "IMC Industrial Fabricators are certified stainless steel welders",
          image: path + '/images/welder.png',
          link: '#'
        }, {
          heading: 'Millwrighting',
          desc: "IMC Industrial Millwrights have years of experience in the Food, Beverage, and Ride Industry",
          image: path + '/images/workers.png',
          link: '#'
        }
      ];
    });


  }

  return ["$scope", "$http", "path", "apiPath", HomeServicesCtrl];

});
