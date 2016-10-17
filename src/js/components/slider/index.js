import tmpl from './tmpl.js'

export default {
  bindings: {
      slides: '<'
  },
  controller(vkNewsService) {
    this.$onInit = function() {
      setTimeout(() => {
        $('.carousel-cell').length >= 2 && $('.main-carousel').flickity({
          cellAlign: 'left',
          contain: true
        });
      },10)
    };

    this.$onDestroy = function(){
      $.magnificPopup.close();
    };

    this.showPopup = function(imgUrl) {
     $.magnificPopup.open({ 
        type:'image',
        items: {
          src: imgUrl
        },
      });
    };
  },
  template: tmpl(),
  controllerAs: '$ctrl',
}
