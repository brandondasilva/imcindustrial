
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

  function ContactContentCtrl($scope, $http, path, getPages) {

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "Contact") {
          $scope.title = res[i].title;
          $scope.featuredImage = res[i].featured_image.attachment_meta.sizes.large.url;
          $scope.content = res[i].content;
        }
      }
    });

    $scope.submit = function() {

      var url = 'https://hidden-inlet-49886.herokuapp.com/api/contact';
      // var url = 'http://localhost:3000/api/v1';

      var dataJSON = {
        from: $scope.formData.inputEmail,
        name: $scope.formData.inputName,
        subject: $scope.formData.inputSubject,
        message: $scope.formData.inputMessage
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

      $http(req).then(function(data) {
        console.log("success = " + data);
      }, function(error) {
        console.log("error! = " + error);
      });
    }
  }

  return ["$scope", "$http", "path", "getPages", ContactContentCtrl];

});
