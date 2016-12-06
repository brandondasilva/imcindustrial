
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
    'app/directives/home/homeservices',
    'app/controllers/home/HomeBannerCtrl',
    'app/controllers/home/HomeServicesCtrl',
    'app/controllers/home/HomeFeaturedCtrl'
  ], function(
    homebanner,
    homefeatured,
    homeservices,
    HomeBannerCtrl,
    HomeServicesCtrl,
    HomeFeaturedCtrl
  ) {

    var moduleName = 'imcindustrial.home';

    angular.module(moduleName, ['ui.router'])
           .directive('homebanner', homebanner)
           .directive('homefeatured', homefeatured)
           .directive('homeservices', homeservices)
           .controller('HomeBannerCtrl', HomeBannerCtrl)
           .controller('HomeServicesCtrl', HomeServicesCtrl)
           .controller('HomeFeaturedCtrl', HomeFeaturedCtrl);

    return moduleName;

  });

}( define, angular ));
