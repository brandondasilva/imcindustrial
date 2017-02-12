
/**
 * ******************************************************************************************************
 *
 *   SetTitle Factory
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

 function SetTitle() {
   var title = 'IMC Industrial Inc.';

   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle; }
   }
 }

 return [SetTitle];

});
