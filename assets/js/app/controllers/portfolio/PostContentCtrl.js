"use strict";define([],function(){function a(a,b,c,d,e){var f=d+"posts?filter[category_name]=portfolio&";b.get(f+"filter[name]="+c.slug).success(function(c){a.postContent=c[0],a.postCategories=c[0].terms.category,e.setTitle(a.postContent.title+" | IMC Industrial Inc."),b.get(d+"media?filter[post_parent]="+c[0].ID).success(function(b){b.length>=1&&(a.media=b)})}),a.latest=[],b.get(f+"filter[posts_per_page]=3").success(function(b){for(var c=0;c<b.length;c++)null===b[c].featured_image?a.latest.push({heading:b[c].title,desc:b[c].excerpt,date:b[c].date,link:b[c].guid,slug:"portfolio/"+b[c].slug}):a.latest.push({heading:b[c].title,desc:b[c].excerpt,date:b[c].date,image:b[c].featured_image.attachment_meta.sizes.medium_large.url,link:b[c].guid,slug:"portfolio/"+b[c].slug})}).error(function(a){console.log("ERROR: "+a)})}return["$scope","$http","$stateParams","apiPath","SetTitle",a]});