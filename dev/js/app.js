'use strict';

define([
  'app/routes',
  'app/directives/navbar',
  'app/HomeModule'
], function(routes, navbar, HomeModule) {

  var appName = 'imcindustrial';
  var depends = ['ui.router', HomeModule];

  var app = angular.module(appName, depends).config(routes);

  app.directive('navbar', navbar);

  app.init = function() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [appName]);
    });
  };

  return app;
});
