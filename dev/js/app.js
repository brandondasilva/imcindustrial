'use strict';

define([
  'app/routes',
  'app/controllers/ServicesCTACtrl',
  'angular',
  'ui.router',
  'bootstrap'],
  function(routes, ServicesCTACtrl) {

    var appName = 'imcindustrial';
    var depends = ['ui.router'];

    var app = angular.module(appName, depends);

    app.config(routes);
    app.controller("ServicesCTACtrl", ServicesCTACtrl);

    app.init = function() {
      angular.element(document).ready(function() {
        angular.bootstrap(document, [appName]);
      });
    };

    return app;
  }
);
