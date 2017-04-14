
'use strict';

if (typeof jQuery === 'function') {
  define('jquery', function () { return jQuery; });
}

require(['config'], function() {
  require([
    '$',
    'underscore',
    'angular',
    'base64',
    'ngSanitize',
    'ngMessages',
    'ng-file-upload-shim',
    'ng-file-upload',
    'angular-recaptcha',
    'ngMaps',
    'ui.router',
    'angular-touch',
    'angular-loading-bar',
    'slick',
    'slick-carousel',
    'bootstrap'
  ], function() {
    require(['app'], function(app) {
      app.init();
    });
  });
});
