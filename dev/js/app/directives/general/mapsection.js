
/**
 * ******************************************************************************************************
 *
 *   mapsection Directive
 *
 *   Returns the list of pages and their contents when called
 *
 *  @author     Brandon Da Silva
 *  @date       December 2016
 *
 * ******************************************************************************************************
 */

 'use strict';

 define([], function() {

   function mapsection() {
     return {
       restrict: 'E',
       scope: {
         info: '='
       },
       templateUrl: 'assets/includes/general/mapsection.html'
     }
   }

   return [mapsection];

 });
