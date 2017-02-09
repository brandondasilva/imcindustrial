
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
    'app/controllers/portfolio/PortfolioPaginationCtrl',
    'app/controllers/portfolio/CategoryCtrl',
    'app/controllers/portfolio/CategoryPostsCtrl',
    'app/controllers/portfolio/PostContentCtrl',
    'app/services/getPages',
    'app/services/PagerService'
  ], function(
    portfoliocontent,
    portfolioposts,
    PortfolioContentCtrl,
    PortfolioPostsCtrl,
    PortfolioPaginationCtrl,
    CategoryCtrl,
    CategoryPostsCtrl,
    PostContentCtrl,
    getPages,
    PagerService
  ) {

    var moduleName = 'imcindustrial.portfolio';

    angular.module(moduleName, ['ui.router'])
           .directive('portfoliocontent', portfoliocontent)
           .directive('portfolioposts', portfolioposts)
           .controller('PortfolioContentCtrl', PortfolioContentCtrl)
           .controller('PortfolioPostsCtrl', PortfolioPostsCtrl)
           .controller('PortfolioPaginationCtrl', PortfolioPaginationCtrl)
           .controller('CategoryCtrl', CategoryCtrl)
           .controller('CategoryPostsCtrl', CategoryPostsCtrl)
           .controller('PostContentCtrl', PostContentCtrl)
           .factory('getPages', getPages)
           .factory('PagerService', PagerService);

    return moduleName;

  });

}( define, angular ));
