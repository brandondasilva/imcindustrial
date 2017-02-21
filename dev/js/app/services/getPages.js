
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

  function getPages($http, apiPath) {

    return $http.get(apiPath + 'pages').success(function(res) {
      return res;
    })
    .error(function(err) {
      return "Error! " + err;
    });
  }

  return ["$http", "apiPath", getPages];

});
