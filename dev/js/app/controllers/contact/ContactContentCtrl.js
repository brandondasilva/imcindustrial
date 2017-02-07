
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

      $scope.statusMessage = null;
      $scope.clicked = true;
      $scope.statusClass = "loading-class";

      var dataJSON = {
        name: $scope.formData.inputName,
        from: $scope.formData.inputEmail,
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

        $http(req).then(function(response) {

          $scope.clicked = false;

          // console.log(response);
          // console.log(response.data.statusCode);

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

  return ["$scope", "$http", "path", "getPages", ContactContentCtrl];

});
