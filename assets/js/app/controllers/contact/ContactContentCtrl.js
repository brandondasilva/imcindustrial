"use strict";define([],function(){function a(a,b,c,d){d.success(function(b){for(var c=0;c<b.length;c++)"Contact"===b[c].title&&(a.title=b[c].title,a.featuredImage=b[c].featured_image.attachment_meta.sizes.large.url,a.content=b[c].content)});var e="https://api.mailgun.net/v3/sandboxdff860e368e044718d491374f196583d.mailgun.org/messages",f="api:key-d022f361268288561c9e4e1d90b7fad0";a.submit=function(){b({method:"POST",url:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+f},data:"from=test@example.com&to=brandon@bdsdesign.co&subject=MailgunTest&text=EmailBody"}).then(function(a){console.log("SUCCESS "+JSON.stringify(a))},function(a){console.log("ERROR "+JSON.stringify(a))})}}return["$scope","$http","path","getPages",a]});