'use strict';

define([], function() {

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    var includes = '/wordpress/wp-content/themes/imcindustrial/assets/includes';

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: includes + '/home/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: includes + '/about/about.html',
        target: "_self"
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: includes + '/portfolio/portfolio.html',
        target: "_self"
      })
      .state('portfolio-posts', {
        url: '/portfolio/:slug',
        templateUrl: includes + '/posts/portfolio-posts.html',
        target: "_self"
      })
      .state('contact', {
        url: '/contact',
        templateUrl: includes + '/contact/contact.html',
        target: "_self"
      })
      .state('careers', {
        url: '/careers',
        templateUrl: includes + '/careers/careers.html'
      })
      .state('careers-posts', {
        url: '/careers/:slug',
        templateUrl: includes + '/posts/careers-posts.html',
        target: "_self"
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }



  return ["$stateProvider", "$urlRouterProvider", "$locationProvider", config];
});
