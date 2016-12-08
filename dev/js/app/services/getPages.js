
/**
 * ******************************************************************************************************
 *
 *   getPages Factory
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

  function getPages($http) {

    return $http.get('wp-json/pages').success(function(res) {
      return res;
    })
    .error(function(err) {
      return err;
    });
  }

  return ["$http", getPages];

})
