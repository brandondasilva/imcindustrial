
/**
 * ******************************************************************************************************
 *
 *   ContactModule
 *
 *   Defines controllers, directives and services for the contact page
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
  "use strict";

  define([
    'app/directives/contact/contactcontent',
    'app/controllers/contact/ContactContentCtrl'
  ], function(
    contactcontent,
    ContactContentCtrl
  ) {

    var moduleName = 'imcindustrial.contact';

    angular.module(moduleName, ['ui.router'])
           .directive('contactcontent', contactcontent)
           .controller('ContactContentCtrl', ContactContentCtrl);

    return moduleName;

  });

}( define, angular ));
