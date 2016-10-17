export default () => 
  '<div class="main-carousel">' +
    '<div class="carousel-cell" ng-repeat="slide in $ctrl.slides">' +     
      '<img ng-click="$ctrl.showPopup(slide.src)" ng-src="{{slide.src}}" class="img-responsive popup">' +
    '</div>' +
  '</div>';