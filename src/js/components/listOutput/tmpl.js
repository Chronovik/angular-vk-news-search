export default () => 
  '<ul>' +
    '<li ng-repeat="new in $ctrl.news">' +     
      '<a href="#/news/{{$index}}">{{new.text.substr(0,50)}}...</a>' +     
    ' </li>' +
  ' </ul>' +
  '<div class="pagination">' +
    '<button class="btn btn-default" ng-click="$ctrl.back()">Назад</button>' +
    '<div class="pagination__counter">{{$ctrl.page + 1}}</div>' +
    '<button class="btn btn-default" ng-click="$ctrl.next()">Вперёд</button>' +
  '</div>';