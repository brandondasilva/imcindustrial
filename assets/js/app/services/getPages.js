"use strict";define([],function(){function a(a,b){return a.get(b+"pages").success(function(a){return a}).error(function(a){return"Error! "+a})}return["$http","apiPath",a]});