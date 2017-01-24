
'use strict';

if (typeof jQuery === 'function') {
  define('jquery', function () { return jQuery; });
}

require(['config'], function() {
  require([
    'angular',
    'base64',
    'ngSanitize',
    'ngMessages',
    'ngMaps',
    'ui.router',
    'angular-touch',
    'angular-carousel',
    'bootstrap'
  ], function() {
    require(['app'], function(app) {
      app.init();
    });
  });
});
