
/**
 * ******************************************************************************************************
 *
 *   CareerPostingCtrl
 *
 *   The controller for the contact page content pulled from WP
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

'use strict';

define([], function() {

  function CareerPostingCtrl(
    $scope,
    $http,
    $stateParams,
    getPages,
    path,
    apiPath,
    SetTitle
  ) {

    var searchPath = apiPath + "posts?filter[category_name]=careers&";
    var jobTitle, jobLink;

    $http.get(searchPath + 'filter[name]=' + $stateParams.slug).success(function(res) {
      $scope.postContent = res[0];
      jobTitle = res[0].title;
      jobLink = res[0].slug;

      // Set Page Title
      SetTitle.setTitle($scope.postContent.title + ' | IMC Industrial Inc.');
    }).error(function(err) {
      console.log("ERROR: " + err);
    });

    $http.get(searchPath + 'filter[posts_per_page]=3').success(function(res) {
      $scope.recentPostings = res;
    }).error(function(err) {
      console.log("ERROR: " + err);
    });

    $scope.submit = function() {

      var url = 'https://hidden-inlet-49886.herokuapp.com/api/contact';

      $scope.statusMessage = null;
      $scope.clicked = true;
      $scope.statusClass = "loading-class";

      var dataJSON = {
        name: $scope.formData.inputName,
        from: $scope.formData.inputEmail,
        subject: $scope.formData.inputSubject,
        message: $scope.formData.inputMessage,
        jobTitle: jobTitle,
        jobLink: jobLink
      };

      var req = {
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: dataJSON
      }

      $http(req).then(function(response) {

        $scope.clicked = false;

        if (response.data.statusCode == 200 || response.data.statusCode == 202) {
          $scope.statusMessage = 'Success!';
          $scope.statusImage = path + '/images/icons/check.svg';
          $scope.statusClass = 'success';
        } else {
          $scope.statusMessage = 'Error! Try again.';
          $scope.statusImage = path + '/images/icons/error.svg';
          $scope.statusClass = 'failed';
        }

      }, function(error) {

        $scope.clicked = false;

        $scope.statusMessage = 'Error! Try again.';
        $scope.statusImage = path + '/images/icons/error.svg';
        $scope.statusClass = 'failed';
      });
    }
  }

  return [
    "$scope",
    "$http",
    "$stateParams",
    "getPages",
    "path",
    "apiPath",
    "SetTitle",
    CareerPostingCtrl
  ];

});
