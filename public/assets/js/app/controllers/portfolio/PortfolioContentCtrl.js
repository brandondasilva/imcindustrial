"use strict";define([],function(){function a(a,b,c,d){d.setTitle("Portfolio | IMC Industrial Inc."),c.success(function(b){for(var c=0;c<b.length;c++)"Portfolio"===b[c].title&&(a.title=b[c].title,a.featuredImage=b[c].featured_image.attachment_meta.sizes.large.url,a.content=b[c].content)})}return["$scope","$http","getPages","SetTitle",a]});