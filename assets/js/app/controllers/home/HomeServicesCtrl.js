"use strict";define([],function(){function a(a,b,c){b.get("index.php/wp-json/posts/?filter[category_name]=services&filter[tag]=excerpt").success(function(b){a.result=b,a.services=[];for(var c=0;c<a.result.length;c++)a.services.push({heading:a.result[c].title,desc:a.result[c].excerpt,image:a.result[c].featured_image.attachment_meta.sizes.medium.url,link:"#"})}).error(function(){a.services=[{heading:"IMC",desc:"Industrial Solutions",image:c+"/images/pipes.png",link:"#"},{heading:"Fabricators",desc:"IMC Industrial Fabricators are certified stainless steel welders",image:c+"/images/welder.png",link:"#"},{heading:"Millwrighting",desc:"IMC Industrial Millwrights have years of experience in the Food, Beverage, and Ride Industry",image:c+"/images/workers.png",link:"#"}]})}return["$scope","$http","path",a]});