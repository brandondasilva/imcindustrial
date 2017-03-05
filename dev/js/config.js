require.config({

  baseUrl: "wp-content/themes/imcindustrial/assets/js",

  paths: {
    '$'                : '../bower_components/jquery/dist/jquery.min',
    'underscore'       : '../bower_components/underscore/underscore-min',
    'angular'          : '../bower_components/angular/angular.min',
    'base64'           : '../bower_components/angular-base64/angular-base64.min',
    'ngSanitize'       : '../bower_components/angular-sanitize/angular-sanitize.min',
    'ngMessages'       : '../bower_components/angular-messages/angular-messages.min',
    'ng-file-upload-shim' : '../bower_components/ng-file-upload-shim/ng-file-upload-shim.min',
    'ng-file-upload'   : '../bower_components/ng-file-upload/ng-file-upload.min',
    'ngMaps'           : '../bower_components/ng-maps/dist/ng-maps.min',
    'ui.router'        : '../bower_components/angular-ui-router/release/angular-ui-router.min',
    'angular-touch'    : '../bower_components/angular-touch/angular-touch.min',
    'angular-loading-bar' : '../bower_components/angular-loading-bar/build/loading-bar.min',
    'slick'            : '../bower_components/angular-slick/dist/slick.min',
    'slick-carousel'   : '../bower_components/slick-carousel/slick/slick.min',
    'bootstrap'        : '../bower_components/bootstrap/dist/js/bootstrap.min'
  },

  shim: {
    '$': {
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
    'ng-file-upload-shim': {
      deps: ["angular"],
      exports: 'ng-file-upload-shim'
    },
    'ng-file-upload': {
      deps: ["angular"],
      exports: 'ng-file-upload'
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
    'angular-loading-bar': {
      deps: ["angular"],
      exports: 'angular-loading-bar'
    },
    'slick': {
      deps: ["angular", "$"],
      exports: 'slick'
    },
    'slick-carousel': {
      deps: ["$"],
      exports: 'slick'
    },
    'bootstrap': {
      deps: ["$"],
      exports: 'bootstrap'
    }
  },

  deps: [
    '$',
    'underscore',
    'angular',
    'base64',
    'ngSanitize',
    'ngMessages',
    'ng-file-upload-shim',
    'ng-file-upload',
    'ngMaps',
    'ui.router',
    'angular-touch',
    'angular-loading-bar',
    'slick',
    'slick-carousel',
    'bootstrap'
  ]

});
