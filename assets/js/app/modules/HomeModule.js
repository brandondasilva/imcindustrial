!function(a,b){"use strict";a(["app/directives/home/homebanner","app/directives/home/homefeatured","app/directives/home/homeservices","app/controllers/home/HomeBannerCtrl","app/controllers/home/HomeServicesCtrl","app/controllers/home/HomeFeaturedCtrl"],function(a,c,d,e,f,g){var h="imcindustrial.home";return b.module(h,["ui.router"]).directive("homebanner",a).directive("homefeatured",c).directive("homeservices",d).controller("HomeBannerCtrl",e).controller("HomeServicesCtrl",f).controller("HomeFeaturedCtrl",g),h})}(define,angular);