'use strict';

define([], function() {

  function config($stateProvider, $urlRouterProvider) {

    var includes = 'wp-content/themes/imcindustrial/assets/includes';

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: includes + '/home/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: includes + '/about/about.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: includes + '/portfolio/portfolio.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: includes + '/contact/contact.html'
      })
      .state('careers', {
        url: '/careers',
        templateUrl: includes + '/careers/careers.html'
      });

    $urlRouterProvider.otherwise('/');
  }

  return ["$stateProvider", "$urlRouterProvider", config];
});
