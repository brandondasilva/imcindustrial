!function(a,b){"use strict";a(["app/directives/portfolio/portfoliocontent","app/directives/portfolio/portfolioposts","app/controllers/portfolio/PortfolioContentCtrl","app/controllers/portfolio/PortfolioPostsCtrl","app/controllers/portfolio/PortfolioPaginationCtrl","app/controllers/portfolio/PostContentCtrl","app/services/getPages","app/services/PagerService"],function(a,c,d,e,f,g,h,i){var j="imcindustrial.portfolio";return b.module(j,["ui.router"]).directive("portfoliocontent",a).directive("portfolioposts",c).controller("PortfolioContentCtrl",d).controller("PortfolioPostsCtrl",e).controller("PortfolioPaginationCtrl",f).controller("PostContentCtrl",g).factory("getPages",h).factory("PagerService",i),j})}(define,angular);