"use strict";define([],function(){function a(a,b,c,d,e){e.success(function(b){for(var c=0;c<b.length;c++)"Contact"===b[c].title&&(a.title=b[c].title,a.featuredImage=b[c].featured_image.attachment_meta.sizes.large.url,a.content=b[c].content)});a.submit=function(){console.log("submit");var a="https://api.mailgun.net/v3/sandboxdff860e368e044718d491374f196583d.mailgun.org/messages",d={from:"postmaster@sandboxdff860e368e044718d491374f196583d.mailgun.org",to:"brandon@bdsdesign.co",subject:"Test subject",text:"Body text"},e={method:"POST",url:a,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+c.encode("api:key-d022f361268288561c9e4e1d90b7fad0")},transformRequest:function(a){var b=[];for(var c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},data:d};b(e).then(function(a){console.log("success = "+a)},function(a){console.log("error! = "+a)})}}return["$scope","$http","$base64","path","getPages",a]});