"use strict";define(["app/routes","app/directives/navbar","app/directives/bottom","app/controllers/NavCtrl","app/modules/HomeModule","app/modules/PortfolioModule","app/modules/ContactModule"],function(a,b,c,d,e,f,g){var h="imcindustrial",i=["ui.router",e,f,g],j=angular.module(h,i).config(a);return j.directive("navbar",b).directive("bottom",c).controller("NavCtrl",d),j.constant("path","wp-content/themes/imcindustrial/assets"),j.init=function(){angular.element(document).ready(function(){angular.bootstrap(document,[h])})},j});