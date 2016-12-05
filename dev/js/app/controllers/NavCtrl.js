'use strict';

define([], function() {

  function NavCtrl($scope, $http, path) {

    $scope.home = {
      name: "Home",
      path: path + "/images/logo.png",
      link: "main"
    }

    $scope.items = [
      {
        name: "About",
        link: "about"
      }, {
        name: "Portfolio",
        link: "portfolio"
      }, {
        name: "Contact",
        link: "contact"
      },
    ];
  }

  return ["$scope", "$http", "path", NavCtrl];

})
