
/**
 * ******************************************************************************************************
 *
 *   CategoryPostsCtrl
 *
 *   The controller for the portfolio page content pulled from WP
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function CategoryPostsCtrl($scope, $http, $stateParams, apiPath, PagerService) {
    var vm = this;

    vm.allPosts = [];
    vm.pageTitle = "";
    vm.pager = {};
    vm.setPage = setPage;

    $http.get(apiPath + 'posts/?filter[category_name]=' + $stateParams.category + '&filter[posts_per_page]=-1').success(function(res) {
      vm.allPosts = res;

      initController();
    });

    $http.get(apiPath + 'taxonomies/category/terms/?filter[slug]=' + $stateParams.category).success(function(res) {
      vm.pageTitle = res[0].name;
    });

    function initController() {
      // initialize to page 1
      vm.setPage(1);
    }

    function setPage(page) {

      if (page < 1 || page > vm.pager.totalPages) { return; }

      // get pager object from service
      vm.pager = PagerService.GetPager(vm.allPosts.length, page);

      // get current page of items
      vm.items = vm.allPosts.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }

    $scope.scroll = function () {
      angular.element('html, body').scrollTop(0);
    };
  }

  return ["$scope", "$http", "$stateParams", "apiPath", "PagerService", CategoryPostsCtrl];

});
