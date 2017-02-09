
/**
 * ******************************************************************************************************
 *
 *   PostContentCtrl
 *
 *   This controller retrieves the contents of the individual posts by passing
 *   the slug through the stateParams.
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

 'use strict';

 define([], function() {

   function PostContentCtrl($scope, $http, $stateParams, apiPath) {

     var path = apiPath + "posts?filter[category_name]=portfolio&";

     $http.get(path + 'filter[name]=' + $stateParams.slug).success(function(res) {
       $scope.postContent = res[0];
       console.log(res)
     });

     $http.get('?rest_route=/wp/v2/media/?filter[post]=' + $stateParams.slug).success(function(res) {
       console.log(res)
       console.log($stateParams.slug)
       $scope.media = res;
     });

     $scope.latest = [];

     $http.get(path + 'filter[posts_per_page]=3').success(function(res) {

       for (var i = 0; i < res.length; i++) {

         if (res[i].featured_image === null) {
           $scope.latest.push({
             heading: res[i].title,
             desc:    res[i].excerpt,
             date:    res[i].date,
             // image:   null,  TODO NEED A PLACEHOLDER IMAGE
             link:    res[i].guid,
             slug:    "portfolio/" + res[i].slug
           });
         } else {
           $scope.latest.push({
             heading: res[i].title,
             desc:    res[i].excerpt,
             date:    res[i].date,
             image:   res[i].featured_image.attachment_meta.sizes.medium_large.url,
             link:    res[i].guid,
             slug:    "portfolio/" + res[i].slug
           });
         }
       }
     })
   }

   return ["$scope", "$http", "$stateParams", "apiPath", PostContentCtrl];

 })
