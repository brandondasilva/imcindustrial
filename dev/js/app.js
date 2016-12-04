'use strict';

define([
  'app/routes',
  'app/directives/navbar',
  'app/directives/bottom',
  'app/modules/HomeModule',
  'app/modules/PortfolioModule'
], function(routes, navbar, bottom, HomeModule, PortfolioModule) {

  var appName = 'imcindustrial';
  var depends = ['ui.router', HomeModule, PortfolioModule];

  var app = angular.module(appName, depends).config(routes);

  app.directive('navbar', navbar)
     .directive('bottom', bottom);

  app.init = function() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [appName]);
    });
  };

  return app;
});
