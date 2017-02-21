'use strict';

define([], function() {

  function config(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $uiViewScrollProvider,
    cfpLoadingBarProvider
  ) {

    var includes = 'wp-content/themes/imcindustrial/assets/includes';

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: includes + '/home/home.html'
      })
      .state('about', {
        url: '/about/',
        templateUrl: includes + '/about/about.html',
        target: "_self"
      })
      .state('portfolio', {
        url: '/portfolio/',
        templateUrl: includes + '/portfolio/portfolio.html',
        target: "_self"
      })
      .state('portfolio-posts', {
        url: '/portfolio/:slug/',
        templateUrl: includes + '/posts/portfolio-posts.html',
        target: "_self"
      })
      .state('portfolio-pagination', {
        url: '/portfolio/p/:page/',
        templateUrl: includes + '/posts/portfolio-pagination.html',
        target: "_self"
      })
      .state('portfolio-category', {
        url: '/portfolio/c/:category/',
        templateUrl: includes + '/posts/category-pagination.html',
        target: "_self"
      })
      .state('contact', {
        url: '/contact/',
        templateUrl: includes + '/contact/contact.html',
        target: "_self"
      })
      .state('careers', {
        url: '/careers/',
        templateUrl: includes + '/careers/careers.html',
        target: "_self"
      })
      .state('careers-posts', {
        url: '/careers/:slug/',
        templateUrl: includes + '/posts/careers-posts.html',
        target: "_self"
      });

    $urlRouterProvider.otherwise('/');

    // Fixes any URL that doesn't have a trailing by
    // adding one and redirecting the route correctly.
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.url();

      // check to see if the path already has a slash where it should be
      if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
          return;
      }

      if (path.indexOf('?') > -1) {
          return path.replace('?', '/?');
      }

      return path + '/';
    });

    $locationProvider.html5Mode(true);

    $uiViewScrollProvider.useAnchorScroll();

    cfpLoadingBarProvider.includeSpinner = false;
  }

  return [
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider",
    "$uiViewScrollProvider",
    "cfpLoadingBarProvider",
    config
  ];
});
