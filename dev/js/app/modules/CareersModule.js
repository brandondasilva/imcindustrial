
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
    'app/controllers/careers/CareersContentCtrl',
    'app/controllers/careers/CareersPostsCtrl',
    'app/services/getPages'
  ], function(
    CareersContentCtrl,
    CareersPostsCtrl,
    getPages
  ) {

    var moduleName = 'imcindustrial.careers';

    angular.module(moduleName, ['ui.router'])
           .controller('CareersContentCtrl', CareersContentCtrl)
           .controller('CareersPostsCtrl', CareersPostsCtrl)
           .factory('getPages', getPages);

    return moduleName;

  });

}( define, angular ));
