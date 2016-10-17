import tmpl from './tmpl.js'

export default {
  controller(vkNewsService, $scope) {
    let self = this;
    self.news = [];
    self.page = vkNewsService.getCurrentPage();
    self.$onInit = function () {
      this.news = vkNewsService.getNews();
    };
    
    self.back = () => {
       vkNewsService.back()
       .then(() => {         
          $scope.$apply(function(){
            self.news = vkNewsService.getNews();
            self.page = vkNewsService.getCurrentPage();
          });         
      });
    };
    self.next = () => {
      vkNewsService.next()
      .then(() => {
          $scope.$apply(function(){
            self.news = vkNewsService.getNews();
            self.page = vkNewsService.getCurrentPage();
          }); 
      });             
    };
  },
  template: tmpl(),
}
