'use strict';

define([], function() {

  function config(
    $stateProvider,
    $urlRouterProvider,
    $urlMatcherFactoryProvider,
    $locationProvider,
    $uiViewScrollProvider,
    cfpLoadingBarProvider,
    vcRecaptchaServiceProvider
  ) {

    var includes = 'wp-content/themes/imcindustrial/assets/includes';

    $urlMatcherFactoryProvider.strictMode(false);

    $locationProvider.html5Mode(true);

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
        url: '/portfolio/:slug',
        templateUrl: includes + '/posts/portfolio-posts.html',
        target: "_self"
      })
      .state('portfolio-pagination', {
        url: '/portfolio/p/:page',
        templateUrl: includes + '/posts/portfolio-pagination.html',
        target: "_self"
      })
      .state('portfolio-category', {
        url: '/portfolio/c/:category',
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
        url: '/careers/:slug',
        templateUrl: includes + '/posts/careers-posts.html',
        target: "_self"
      });


    $urlRouterProvider.otherwise('/');

    $uiViewScrollProvider.useAnchorScroll();

    cfpLoadingBarProvider.includeSpinner = false;

    vcRecaptchaServiceProvider.setDefaults({
      key: '6LcurRcUAAAAAAhk7x1eq0OIxeNp97Wwbdqmlw9L',
      theme: 'light',
      size: 'normal',
      type: 'image',
      lang: 'en'
    });
    
  }

  return [
    "$stateProvider",
    "$urlRouterProvider",
    "$urlMatcherFactoryProvider",
    "$locationProvider",
    "$uiViewScrollProvider",
    "cfpLoadingBarProvider",
    "vcRecaptchaServiceProvider",
    config
  ];
});
