'use strict';

define([], function() {

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

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
      .state('portfolio-posts', {
        url: '/portfolio/:slug',
        templateUrl: includes + '/posts/portfolio-posts.html'
      })
      .state('portfolio-pagination', {
        url: '/portfolio/p/:page',
        templateUrl: includes + '/posts/portfolio-pagination.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: includes + '/contact/contact.html'
      })
      .state('careers', {
        url: '/careers',
        templateUrl: includes + '/careers/careers.html'
      })
      .state('careers-posts', {
        url: '/careers/:slug',
        templateUrl: includes + '/posts/careers-posts.html'
      });

    $urlRouterProvider.otherwise(includes + '/404.html');
  }

  return ["$stateProvider", "$urlRouterProvider", "$locationProvider", config];
});
