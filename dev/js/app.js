
(function ( define, angular ) {

'use strict';

define([
  'app/routes',
  'app/directives/general/navbar',
  'app/directives/general/bottom',
  'app/directives/general/mapsection',
  'app/directives/pages/pagescontent',
  'app/controllers/general/MainCtrl',
  'app/controllers/general/NavCtrl',
  'app/controllers/general/MapCtrl',
  'app/controllers/general/PagesCtrl',
  'app/services/SetTitle',
  'app/modules/HomeModule',
  'app/modules/CareersModule',
  'app/modules/ContactModule'
], function (
  routes,
  navbar,
  bottom,
  mapsection,
  pagescontent,
  MainCtrl,
  NavCtrl,
  MapCtrl,
  PagesCtrl,
  SetTitle,
  HomeModule,
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
    CareersModule,
    ContactModule
  ];

  var app = angular.module(appName, depends).config(routes);

  app.directive('navbar', navbar)
     .directive('bottom', bottom)
     .directive('mapsection', mapsection)
     .directive('pagescontent', pagescontent)
     .factory('SetTitle', SetTitle)
     .controller('MainCtrl', MainCtrl)
     .controller('NavCtrl', NavCtrl)
     .controller('MapCtrl', MapCtrl)
     .controller('PagesCtrl', PagesCtrl);

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
