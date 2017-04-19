
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
   var seo = {
     wpseo_metadesc: "Millwrighting and Fabrication",
     wpseo_opengraph_title: "IMC Industrial Inc.",
     wpseo_opengraph_description: "Millwrighting and Fabrication",
     wpseo_opengraph_image: "",
     wpseo_twitter_title: "IMC Industrial Inc.",
     wpseo_twitter_description: "Millwrighting and Fabrication",
     wpseo_twitter_image: ""
   };

   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle; },
     seo: function() { return seo; },
     setSEO: function(newSEO) {

       if (newSEO.wpseo_opengraph_title == '') {
         newSEO.wpseo_opengraph_title = title;
       }
       if (newSEO.wpseo_opengraph_description == '') {
         newSEO.wpseo_opengraph_description = newSEO.wpseo_metadesc;
       }

       seo = {
         wpseo_metadesc: newSEO.wpseo_metadesc,
         wpseo_opengraph_title: newSEO.wpseo_opengraph_title,
         wpseo_opengraph_description: newSEO.wpseo_opengraph_description,
         wpseo_opengraph_image: newSEO.wpseo_opengraph_image,
         wpseo_twitter_title: newSEO.wpseo_twitter_title,
         wpseo_twitter_description: newSEO.wpseo_twitter_description,
         wpseo_twitter_image: newSEO.wpseo_twitter_image
       };
     }
   }
 }

 return [SetTitle];

});
