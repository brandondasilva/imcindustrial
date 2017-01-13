
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

  function ContactContentCtrl($scope, $http, $base64, path, getPages) {

    getPages.success(function(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].title === "Contact") {
          $scope.title = res[i].title;
          $scope.featuredImage = res[i].featured_image.attachment_meta.sizes.large.url;
          $scope.content = res[i].content;
        }
      }
    });


    var mailgunApiKey = "api:key-d022f361268288561c9e4e1d90b7fad0";

    $scope.submit = function() {
      console.log('submit');

      var url = "https://api.mailgun.net/v3/sandboxdff860e368e044718d491374f196583d.mailgun.org/messages";
      var dataJSON = {
        from: "postmaster@sandboxdff860e368e044718d491374f196583d.mailgun.org",
        to: "brandon@bdsdesign.co",
        subject: "Test subject",
        text: "Body text"
      };

      var req = {
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + $base64.encode('api:key-d022f361268288561c9e4e1d90b7fad0')
        },
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: dataJSON
      };

      $http(req).then(function(data) {
        console.log("success = " + data);
      }, function(error) {
        console.log("error! = " + error);
      });


      // $http({
      //   method: "POST",
      //   url: mailgunUrl,
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded"/*,
      //     "Authorization": "Basic " + mailgunApiKey*/
      //   },
      //   data: "from=" + "test@example.com" + "&to=" + "brandon@bdsdesign.co" + "&subject=" + "MailgunTest" + "&text=" + "EmailBody"
      // }).then(function(success) {
      //   console.log("SUCCESS " + JSON.stringify(success));
      // }, function(error) {
      //   console.log("ERROR " + JSON.stringify(error));
      // });
    }
  }

  return ["$scope", "$http", "$base64", "path", "getPages", ContactContentCtrl];

});
