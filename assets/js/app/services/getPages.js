"use strict";define([],function(){function a(a){return a.get("wp-json/pages").success(function(a){return a}).error(function(a){return a})}return["$http",a]});