!function(a,b){"use strict";a(["app/directives/portfolio/portfoliocontent","app/directives/portfolio/portfolioposts","app/controllers/portfolio/PortfolioContentCtrl","app/controllers/portfolio/PortfolioPostsCtrl","app/controllers/portfolio/PortfolioPaginationCtrl","app/controllers/portfolio/CategoryCtrl","app/controllers/portfolio/CategoryPostsCtrl","app/controllers/portfolio/PostContentCtrl","app/services/getPages","app/services/PagerService"],function(a,c,d,e,f,g,h,i,j,k){var l="imcindustrial.portfolio";return b.module(l,["ui.router"]).directive("portfoliocontent",a).directive("portfolioposts",c).controller("PortfolioContentCtrl",d).controller("PortfolioPostsCtrl",e).controller("PortfolioPaginationCtrl",f).controller("CategoryCtrl",g).controller("CategoryPostsCtrl",h).controller("PostContentCtrl",i).factory("getPages",j).factory("PagerService",k),l})}(define,angular);