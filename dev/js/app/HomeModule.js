
/**
 * ******************************************************************************************************
 *
 *   HomeModule
 *
 *   Defines controllers, directives and services for the home page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
  "use strict";

  define([
    'app/directives/home/homebanner',
    'app/directives/home/homefeatured',
    'app/directives/home/servicescta',
    'app/controllers/home/ServicesCTACtrl'
  ], function(homebanner, homefeatured, servicescta, ServicesCTACtrl) {

    var moduleName = 'imcindustrial.home';

    angular.module(moduleName, ['ui.router'])
           .directive('homebanner', homebanner)
           .directive('homefeatured', homefeatured)
           .directive('servicescta', servicescta)
           .controller('ServicesCTACtrl', ServicesCTACtrl);

    return moduleName;

  });

}( define, angular ));
