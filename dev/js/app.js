'use strict';

define([
  'app/routes',
  'app/directives/navbar',
  'app/directives/bottom',
  'app/controllers/NavCtrl',
  'app/modules/HomeModule',
  'app/modules/AboutModule',
  'app/modules/PortfolioModule',
  'app/modules/ContactModule'
], function (
  routes,
  navbar,
  bottom,
  NavCtrl,
  HomeModule,
  AboutModule,
  PortfolioModule,
  ContactModule
) {

  var appName = 'imcindustrial';
  var depends = [
    'ui.router',
    HomeModule,
    AboutModule,
    PortfolioModule,
    ContactModule
  ];

  var app = angular.module(appName, depends).config(routes);

  app.directive('navbar', navbar)
     .directive('bottom', bottom)
     .controller('NavCtrl', NavCtrl);

  app.constant('path', 'wp-content/themes/imcindustrial/assets');

  app.init = function() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [appName]);
    });
  };

  return app;
});
