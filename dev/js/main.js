
'use strict';

if (typeof jQuery === 'function') {
  define('jquery', function () { return jQuery; });
}

require(['config'], function() {
  require(['angular', 'ui.router', 'bootstrap'], function() {
    require(['app'], function(app) {
      app.init();
    });
  });
});
