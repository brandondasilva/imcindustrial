"use strict";define([],function(){function a(a,b,c,d){var e=d+"posts?filter[category_name]=portfolio&";b.get(e+"filter[name]="+c.slug).success(function(b){a.postContent=b[0],console.log(b)}),b.get("?rest_route=/wp/v2/media/?filter[post]="+c.ID).success(function(b){console.log(b),console.log(c.slug),a.media=b}),a.latest=[],b.get(e+"filter[posts_per_page]=3").success(function(b){for(var c=0;c<b.length;c++)null===b[c].featured_image?a.latest.push({heading:b[c].title,desc:b[c].excerpt,date:b[c].date,link:b[c].guid,slug:"portfolio/"+b[c].slug}):a.latest.push({heading:b[c].title,desc:b[c].excerpt,date:b[c].date,image:b[c].featured_image.attachment_meta.sizes.medium_large.url,link:b[c].guid,slug:"portfolio/"+b[c].slug})})}return["$scope","$http","$stateParams","apiPath",a]});