"use strict";define([],function(){function a(a,b){var c="wp-content/themes/imcindustrial/assets/includes";a.state("main",{url:"/",templateUrl:c+"/home/home.html"}).state("about",{url:"/about",templateUrl:c+"/about/about.html",target:"_self"}).state("portfolio",{url:"/portfolio",templateUrl:c+"/portfolio/portfolio.html",target:"_self"}).state("portfolio-posts",{url:"/portfolio/:slug",templateUrl:c+"/posts/portfolio-posts.html",target:"_self"}).state("portfolio-pagination",{url:"/portfolio/p/:page",templateUrl:c+"/posts/portfolio-pagination.html",target:"_self"}).state("contact",{url:"/pages/contact",templateUrl:c+"/contact/contact.html",target:"_self"}).state("careers",{url:"/careers",templateUrl:c+"/careers/careers.html",target:"_se;f"}).state("careers-posts",{url:"/careers/:slug",templateUrl:c+"/posts/careers-posts.html",target:"_self"}),b.otherwise("/")}return["$stateProvider","$urlRouterProvider",a]});