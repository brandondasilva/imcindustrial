!function(a,b){"use strict";a(["app/routes","app/directives/general/navbar","app/directives/general/bottom","app/directives/general/mapsection","app/directives/general/contact","app/directives/pages/pagescontent","app/controllers/general/MainCtrl","app/controllers/general/NavCtrl","app/controllers/general/MapCtrl","app/controllers/general/ContactCtrl","app/controllers/general/PagesCtrl","app/services/SetTitle","app/modules/HomeModule","app/modules/CareersModule"],function(a,c,d,e,f,g,h,i,j,k,l,m,n,o){var p="imcindustrial",q=["ui.router","base64","slick","angular-loading-bar","ngSanitize","ngMessages","ngFileUpload","vcRecaptcha","ngMaps",n,o],r=b.module(p,q).config(a);return r.directive("navbar",c).directive("bottom",d).directive("mapsection",e).directive("contact",f).directive("pagescontent",g).factory("SetTitle",m).controller("MainCtrl",h).controller("NavCtrl",i).controller("MapCtrl",j).controller("ContactCtrl",k).controller("PagesCtrl",l),r.constant("_",window._),r.constant("path","assets"),r.constant("apiPath","http://wordpress.imcindustrial.ca/wp-json/"),r.run(["$rootScope",function(a,b){a.$on("$stateChangeError",function(a,c,d,e,f,g){return a.preventDefault(),console.log("ERROR ON PAGE"),b.go("/")})}]),r.init=function(){b.element(document).ready(function(){b.bootstrap(document,[p])})},r})}(define,angular);