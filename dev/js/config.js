require.config({

  paths: {
    'jquery'  : '../bower_components/jquery/dist/jquery.min',
    'angular' : '../bower_components/angular/angular.min',
    'ngSanitize': '../bower_components/angular-sanitize/angular-sanitize.min',
    'ngMaps' : '../bower_components/ng-maps/dist/ng-maps.min',
    'ui.router' : '../bower_components/angular-ui-router/release/angular-ui-router.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },

  shim: {
    'jquery': {
      exports: '$'
    },
    'angular': {
      exports: 'angular'
    },
    'ngSanitize': {
      exports: 'ngSanitize'
    },
    'ngMaps': {
      exports: 'ngMaps'
    },
    'ui.router': {
      deps: ["angular"]
    },
    'bootstrap': {
      exports: 'bootstrap'
    }
  },

  deps: [
    'angular',
    'ngSanitize',
    'ngMaps',
    'ui.router',
    'bootstrap'
  ]

});
