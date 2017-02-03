
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

   function PostContentCtrl($scope, $http, $stateParams) {

     $http.get('index.php/wp-json/posts?filter[category_name]=portfolio&filter[name]=' + $stateParams.slug).success(function(res) {
       $scope.post = res[0];
     });
   }

   return ["$scope", "$http", "$stateParams", PostContentCtrl];

 })
