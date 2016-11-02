define([
  'app/controllers/ServicesCTACtrl',
  'angular',
  'bootstrap'],
  function(ServicesCTACtrl) {
    // 'use strict';

    var appName = 'imcindustrial';
    var depends = [];

    var app = angular.module(appName, depends);

    app.controller("ServicesCTACtrl", ServicesCTACtrl);

    app.init = function() {
      angular.element(document).ready(function() {
        angular.bootstrap(document, [appName]);
      });
    };

    return app;
  }
);
