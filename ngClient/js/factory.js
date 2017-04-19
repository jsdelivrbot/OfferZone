
myApp.factory('dataFactory', function($http) {
  /** https://docs.angularjs.org/guide/providers **/
  var urlBase = 'http://localhost:3000/api/v1/products';
  var _prodFactory = {};

  _prodFactory.getProducts = function() {
    return $http.get(urlBase);
  }; 

  return _prodFactory;
});



myApp.filter('myFilter', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, optional1, optional2) {
    if(input==null){

    }else{
  var output='';
   var res = input.split(":");
   var val='';
    var time='';

   if(res[0]>=12){
      val='PM'
      time=res[0]-12;
   }else{
     val='AM';
     time=res[0];
   }
    

   var finalvalue=time+':'+res[1]+' '+val;


    // Do filter work here

    return finalvalue;

    }
  return '';

  }

});

 
