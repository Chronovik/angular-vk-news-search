import tmpl from './tmpl.js'
import $ from 'jquery'

export default {
  controller(vkNewsService, $location, $scope, $http) {
    var self = this;
    self.valid;

    self.getNews = function(query) {
      if (self.valid) {  
        vkNewsService.reset();
        vkNewsService
        .sendRequest(query)
        .then( 
          result => { 
            $http({
              method: 'POST',
              url: 'http://ft.dev.hismith.ru/stat/create/',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              data: $.param({'query': query}),
            })
            .then(result => {
              console.log(result);
            },
            error => {
              console.log(error);
            });
            
            $scope.$apply(function(){              
              $location.path('/news');
            });            
          },
          error => console.dir(error.message)
        )
      }
    };

    $scope.$watch('query', function(newVal, oldVal) {
       self.valid = (newVal && newVal.length)? true : false;
    }); 
  },
  template: tmpl(),
}
