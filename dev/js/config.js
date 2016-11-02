require.config({
  // baseUrl: '../',

  paths: {
    'jquery'  : '../bower_components/jquery/dist/jquery.min',
    'angular' : '../bower_components/angular/angular.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },

  shim: {
    'jquery': {
      exports: '$'
    },
    'angular': {
      exports: 'angular'
    },
    'bootstrap': {
      exports: 'bootstrap'
    }
  },

  deps: [
    'angular',
    'bootstrap'
  ]

});
