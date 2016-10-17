export default ($routeProvider, $location) => {
    $routeProvider
    .when("/", {
        template: "<search-form></search-form>"
    })
    .when("/news", {
        template : '<list-output></list-output>',
        controller: ['$location', 'vkNewsService', function($location, vkNewsService) {
            vkNewsService.getNews().length || $location.path('/');
        }]
    })
    .when("/news/:id", {
        template : "<single-news newsid='{{$ctrl.id}}'></single-news>",
        controller: ['$location', 'vkNewsService', '$routeParams', function($location, vkNewsService, $routeParams) {            
            if(vkNewsService.getNews().length > 0 && $routeParams.id >= 0) {
                 this.id = $routeParams.id;                
            } else {
                 $location.path('/');
            }
        }],
        controllerAs: '$ctrl'
    })
    .otherwise({redirectTo:'/'});
}
