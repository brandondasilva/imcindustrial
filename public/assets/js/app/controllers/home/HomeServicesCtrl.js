"use strict";define([],function(){function a(a,b,c,d){b.get(d+"posts/?filter[category_name]=services&?filter[posts_per_page]=-1").then(function(b){a.services=[];for(var c=0;c<b.data.length;c++)a.services.push({heading:b.data[c].title,image:b.data[c].featured_image.attachment_meta.sizes.medium.url})},function(a){console.log("ERROR RETRIEVING SERVICES"),console.log("Response: "+a)})}return["$scope","$http","path","apiPath",a]});