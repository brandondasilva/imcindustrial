
/**
 * ******************************************************************************************************
 *
 *   ContactContentCtrl
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

  function ContactContentCtrl($scope, $http, $httpParamSerializerJQLike, path, getPages) {

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "Contact") {
          $scope.title = res[i].title;
          $scope.featuredImage = res[i].featured_image.attachment_meta.sizes.large.url;
          $scope.content = res[i].content;
        }
      }
    });

    $scope.result = 'hidden';
    $scope.resultMessage;
    $scope.formData; // object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; // this is so errors are shown after the form is submitted

    $scope.submit = function(contactform) {

      $scope.submitted = true;
      $scope.submitButtonDisabled = true;

      if (contactform.$valid) {
        $http({
          url     : path + '/includes/contact/contact-form.php',
          method  : 'POST',
          data    : $httpParamSerializerJQLike($scope.formData),
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data) {

          console.log(data);

          if (data.success) { //success comes from the return json object
              $scope.submitButtonDisabled = true;
              $scope.resultMessage = data.message;
              $scope.result='bg-success';
          } else {
              $scope.submitButtonDisabled = false;
              $scope.resultMessage = data.message;
              $scope.result='bg-danger';
          }
        });
      } else {
        $scope.submitButtonDisabled = false;
        $scope.resultMessage = 'Failed :( Please fill out all the fields.';
        $scope.result='bg-danger';
      }
    }
  }

  return ["$scope", "$http", '$httpParamSerializerJQLike', 'path', 'getPages', ContactContentCtrl];

});
