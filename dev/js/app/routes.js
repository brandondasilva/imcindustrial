'use strict';

define([], function() {

  function config($stateProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true);

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: myLocalized.includes + '/main.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: myLocalized.includes + '/portfolio/portfolio.php'
      });

    $urlRouterProvider.otherwise('/');
  }

  return ["$stateProvider", "$urlRouterProvider", config];
});
