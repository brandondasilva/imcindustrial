
/**
 * ******************************************************************************************************
 *
 *   AboutModule
 *
 *   Defines controllers, directives and services for the about page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
  "use strict";

  define([
    'app/controllers/about/AboutCtrl',
    'app/services/getPages'
  ], function(
    AboutCtrl,
    getPages
  ) {

    var moduleName = 'imcindustrial.about';

    angular.module(moduleName, ['ui.router'])
           .controller('AboutCtrl', AboutCtrl)
           .factory('getPages', getPages);

    return moduleName;

  });

}( define, angular ));
