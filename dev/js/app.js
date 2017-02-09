(function ( define, angular ) {

'use strict';

define([
  'app/routes',
  'app/directives/general/navbar',
  'app/directives/general/bottom',
  'app/directives/general/mapsection',
  'app/controllers/general/NavCtrl',
  'app/modules/HomeModule',
  'app/modules/AboutModule',
  'app/modules/PortfolioModule',
  'app/modules/ContactModule'
], function (
  routes,
  navbar,
  bottom,
  mapsection,
  NavCtrl,
  HomeModule,
  AboutModule,
  PortfolioModule,
  ContactModule
) {

  var appName = 'imcindustrial';
  var depends = [
    'ui.router',
    'base64',
    'ngSanitize',
    'ngMessages',
    'ngMaps',
    'slick',
    'angular-carousel',
    HomeModule,
    AboutModule,
    PortfolioModule,
    ContactModule
  ];

  var app = angular.module(appName, depends).config(routes);

  app.directive('navbar', navbar)
     .directive('bottom', bottom)
     .directive('mapsection', mapsection)
     .controller('NavCtrl', NavCtrl);

  app.constant('_', window._); // Underscore
  app.constant('path', 'wp-content/themes/imcindustrial/assets');
  app.constant('apiPath', 'wp-json/');



  app.init = function() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [appName]);
    });
  };

  return app;
});

}( define, angular ));
