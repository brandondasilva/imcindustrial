"use strict";define([],function(){function a(a,b,c){b.get("index.php/wp-json/posts?filter[category_name]=portfolio&filter[name]="+c.slug).success(function(b){a.post=b[0]})}return["$scope","$http","$stateParams",a]});