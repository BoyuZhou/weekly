mainModule.filter('error', function(Errors){
   return function (name) {
       return Errors[name] || name;
   }
});