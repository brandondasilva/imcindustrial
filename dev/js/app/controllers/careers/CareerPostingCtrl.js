
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
    Upload,
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
      jobLink = "imcindustrial.ca/careers/" + res[0].slug;

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

    $scope.display = function() {
      console.log($scope.files)
      console.log($scope.formData.gRecaptchaResponse)
    }

    $scope.submit = function() {

      var url = 'https://hidden-inlet-49886.herokuapp.com/api/careers';

      $scope.statusMessage = null;
      $scope.clicked = true;
      $scope.statusClass = "loading-class";

      var data = new FormData();

      data.append('name', $scope.formData.inputName);
      data.append('from', $scope.formData.inputEmail);
      data.append('subject', jobTitle);
      data.append('message', $scope.formData.inputMessage);
      data.append('link', jobLink);

      if ($scope.files && $scope.files.length) {
        for (var i = 0; i < $scope.files.length; i++) {
          data.append('attachment', $scope.files[i], $scope.files[i].name);
        }
      } else {
        console.log('no files');
      }

      var req = {
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': undefined
        },
        transformRequest: angular.identiy,
        data: data
      }

      $http(req).then(function(response) {

        $scope.clicked = false;

        if (response.data.statusCode == 200 || response.data.statusCode == 202) {
          $scope.statusMessage = 'Success!';
          $scope.statusImage = path + '/images/icons/check.svg';
          $scope.statusClass = 'success';
        } else {
          $scope.statusMessage = 'Error! Try again. ' + response.data.statusCode;
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
    "Upload",
    "getPages",
    "path",
    "apiPath",
    "SetTitle",
    CareerPostingCtrl
  ];

});
