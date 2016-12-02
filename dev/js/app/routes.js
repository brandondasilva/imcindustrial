'use strict';

define([], function() {

  function config($stateProvider, $urlRouterProvider) {

    var includes = 'wp-content/themes/imcindustrial/assets/includes';

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: includes + '/main.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: includes + '/portfolio/portfolio.html'
      });

    $urlRouterProvider.otherwise('/');
  }

  return ["$stateProvider", "$urlRouterProvider", config];
});
