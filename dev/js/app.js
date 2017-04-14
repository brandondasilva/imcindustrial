
(function ( define, angular ) {

'use strict';

define([
  'app/routes',
  'app/directives/general/navbar',
  'app/directives/general/bottom',
  'app/directives/general/mapsection',
  'app/controllers/general/NavCtrl',
  'app/controllers/general/MainCtrl',
  'app/services/SetTitle',
  'app/modules/HomeModule',
  'app/modules/AboutModule',
  'app/modules/PortfolioModule',
  'app/modules/CareersModule',
  'app/modules/ContactModule'
], function (
  routes,
  navbar,
  bottom,
  mapsection,
  NavCtrl,
  MainCtrl,
  SetTitle,
  HomeModule,
  AboutModule,
  PortfolioModule,
  CareersModule,
  ContactModule
) {

  var appName = 'imcindustrial';
  var depends = [
    'ui.router',
    'base64',
    'slick',
    'angular-loading-bar',
    'ngSanitize',
    'ngMessages',
    'ngFileUpload',
    'vcRecaptcha',
    'ngMaps',
    HomeModule,
    AboutModule,
    PortfolioModule,
    CareersModule,
    ContactModule
  ];

  var app = angular.module(appName, depends).config(routes);

  app.directive('navbar', navbar)
     .directive('bottom', bottom)
     .directive('mapsection', mapsection)
     .controller('NavCtrl', NavCtrl)
     .controller('MainCtrl', MainCtrl)
     .factory('SetTitle', SetTitle);

  app.constant('_', window._); // Underscore
  app.constant('path', 'assets');
  app.constant('apiPath', "http://wordpress.imcindustrial.ca/wp-json/")
  // app.constant('apiPath', 'wp-json/');

  app.run(['$rootScope', function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      event.preventDefault();
      console.log('ERROR ON PAGE')
      // $state.get('error').error = { code: 123, description: 'Exception stack trace' }
      return $state.go('/');
    });
  }]);

  app.init = function() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [appName]);
    });
  };

  return app;

});

}( define, angular ));
