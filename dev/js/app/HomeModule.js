
/**
 * ******************************************************************************************************
 *
 *   HomeModule
 *
 *   Defines controllers and services for the home page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
  "use strict";

  define([
    'app/directives/home/homebanner'
  ], function(homebanner) {
    
    var moduleName = 'imcindustrial.home';

    angular.module( moduleName, ['ui.router'] )
           .directive('homebanner', homebanner);

    return moduleName;

  });

}( define, angular ));
