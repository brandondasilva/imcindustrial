require.config({

  paths: {
    'jquery'  : '../bower_components/jquery/dist/jquery.min',
    'angular' : '../bower_components/angular/angular.min',
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
    'ui.router': {
      deps: ["angular"]
    },
    'bootstrap': {
      exports: 'bootstrap'
    }
  },

  deps: [
    'angular',
    'ui.router',
    'bootstrap'
  ]

});
