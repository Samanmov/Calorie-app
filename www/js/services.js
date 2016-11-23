angular.module('starter.services', [])


.factory('Blogg', function($firebaseArray){
  var ref = new Firebase('https://calapp.firebaseio.com');
  //return $firebaseArray(ref);
  var recs = $firebaseArray(ref);
  var Blogg = {
        all: recs,
        get: function(itemId) {
            return recs.$getRecord(itemId);
        }        
    };
    return Blogg;
})
/*
 app.factory('Queue', function($firebaseArray) {
    var ref = new Firebase('https://calapp.firebaseio.com');
    return $firebaseArray(ref);
  });
*/