
/**
 * ******************************************************************************************************
 *
 *   ContactModule
 *
 *   Defines controllers, directives and services for the contact page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
  "use strict";

  define([
    'app/controllers/careers/CareersPostsCtrl',
    'app/controllers/careers/CareerPostingCtrl'
  ], function(
    CareersPostsCtrl,
    CareerPostingCtrl
  ) {

    var moduleName = 'imcindustrial.careers';

    angular.module(moduleName, ['ui.router'])
           .controller('CareersPostsCtrl', CareersPostsCtrl)
           .controller('CareerPostingCtrl', CareerPostingCtrl);

    return moduleName;

  });

}( define, angular ));
