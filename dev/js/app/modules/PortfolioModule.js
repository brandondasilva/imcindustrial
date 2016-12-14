
/**
 * ******************************************************************************************************
 *
 *   PortfolioModule
 *
 *   Defines controllers, directives and services for the portfolio page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
  "use strict";

  define([
    'app/directives/portfolio/portfoliocontent',
    'app/controllers/portfolio/PortfolioContentCtrl',
    'app/services/getPages'
  ], function(
    portfoliocontent,
    PortfolioContentCtrl,
    getPages
  ) {

    var moduleName = 'imcindustrial.portfolio';

    angular.module(moduleName, ['ui.router'])
           .directive('portfoliocontent', portfoliocontent)
           .controller('PortfolioContentCtrl', PortfolioContentCtrl)
           .factory('getPages', getPages);

    return moduleName;

  });

}( define, angular ));
