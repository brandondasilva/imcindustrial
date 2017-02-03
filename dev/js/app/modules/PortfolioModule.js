
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
    'app/directives/portfolio/portfolioposts',
    'app/controllers/portfolio/PortfolioContentCtrl',
    'app/controllers/portfolio/PortfolioPostsCtrl',
    'app/controllers/portfolio/PostContentCtrl',
    'app/services/getPages'
  ], function(
    portfoliocontent,
    portfolioposts,
    PortfolioContentCtrl,
    PortfolioPostsCtrl,
    PostContentCtrl,
    getPages
  ) {

    var moduleName = 'imcindustrial.portfolio';

    angular.module(moduleName, ['ui.router'])
           .directive('portfoliocontent', portfoliocontent)
           .directive('portfolioposts', portfolioposts)
           .controller('PortfolioContentCtrl', PortfolioContentCtrl)
           .controller('PortfolioPostsCtrl', PortfolioPostsCtrl)
           .controller('PostContentCtrl', PostContentCtrl)
           .factory('getPages', getPages);

    return moduleName;

  });

}( define, angular ));
