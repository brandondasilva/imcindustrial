"use strict";define([],function(){function a(a,b){a.portfolioFeatured=[],a.portfolioPosts=[],b.get("https://hidden-inlet-49886.herokuapp.com").success(function(a){console.log(a)}).error(function(a){console.log("fail")}),b.get("index.php/wp-json/posts/?filter[category_name]=featured&filter[posts_per_page]=2").success(function(b){a.portfolioFeatured.push({heading:b[0].title,desc:b[0].excerpt,image:b[0].featured_image.attachment_meta.sizes.medium_large.url,link:b[0].guid},{heading:b[1].title,desc:b[1].excerpt,image:b[1].featured_image.attachment_meta.sizes.medium_large.url,link:b[1].guid})}).error(function(a){console.log("ERROR: "+a)}),b.get("index.php/wp-json/posts/?filter[category_name]=portfolio&filter[posts_per_page]=4").success(function(b){for(var c=0;c<b.length;c++)null===b[c].featured_image?a.portfolioPosts.push({heading:b[c].title,desc:b[c].excerpt,link:b[c].guid}):a.portfolioPosts.push({heading:b[c].title,desc:b[c].excerpt,link:b[c].guid})}).error(function(a){console.log("ERROR: "+a)})}return["$scope","$http",a]});