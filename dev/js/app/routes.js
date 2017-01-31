'use strict';

define([], function() {

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

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
      .state('posts', {
        url: '/portfolio/:slug',
        templateUrl: includes + '/posts/posts.html'
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

    $locationProvider.html5Mode(true);
  }



  return ["$stateProvider", "$urlRouterProvider", "$locationProvider", config];
});
