require.config({

  baseUrl: "wp-content/themes/imcindustrial/assets/js",

  paths: {
    'jquery'           : '../bower_components/jquery/dist/jquery.min',
    'underscore'       : '../bower_components/underscore/underscore-min',
    'angular'          : '../bower_components/angular/angular.min',
    'base64'           : '../bower_components/angular-base64/angular-base64.min',
    'ngSanitize'       : '../bower_components/angular-sanitize/angular-sanitize.min',
    'ngMessages'       : '../bower_components/angular-messages/angular-messages.min',
    'ngMaps'           : '../bower_components/ng-maps/dist/ng-maps.min',
    'ui.router'        : '../bower_components/angular-ui-router/release/angular-ui-router.min',
    'angular-touch'    : '../bower_components/angular-touch/angular-touch.min',
    'angular-carousel' : '../bower_components/angular-carousel/dist/angular-carousel.min',
    'bootstrap'        : '../bower_components/bootstrap/dist/js/bootstrap.min'
  },

  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: 'underscore'
    },
    'angular': {
      exports: 'angular'
    },
    'base64': {
      deps: ["angular"],
      exports: 'base64'
    },
    'ngSanitize': {
      deps: ["angular"],
      exports: 'ngSanitize'
    },
    'ngMessages': {
      deps: ["angular"],
      exports: 'ngMessages'
    },
    'ngMaps': {
      deps: ["angular"],
      exports: 'ngMaps'
    },
    'ui.router': {
      deps: ["angular"]
    },
    'angular-touch': {
      deps: ["angular"],
      exports: 'angular-touch'
    },
    'angular-carousel': {
      deps: ["angular"],
      exports: 'angular-carousel'
    },
    'bootstrap': {
      exports: 'bootstrap'
    }
  },

  deps: [
    'underscore',
    'angular',
    'base64',
    'ngSanitize',
    'ngMessages',
    'ngMaps',
    'ui.router',
    'angular-touch',
    'angular-carousel',
    'bootstrap'
  ]

});
