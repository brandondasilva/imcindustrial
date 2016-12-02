'use strict';

define([
  'app/routes',
  'app/directives/navbar',
  'app/directives/bottom',
  'app/HomeModule'
], function(routes, navbar, bottom, HomeModule) {

  var appName = 'imcindustrial';
  var depends = ['ui.router', HomeModule];

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
