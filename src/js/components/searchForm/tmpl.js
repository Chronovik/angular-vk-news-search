export default () => 
  '<form name="searchForm" novalidate ng-submit="$ctrl.getNews(query)">' +
    '<div class="form-group">' +
      ' <label for="searchQuery">Строка запроса</label>' +
      ' <div ng-show="!$ctrl.valid">Введите запрос</div>' +
      ' <input type="text" class="form-control" id="query" placeholder="запрос" ng-model="query">' +
    ' </div>' +
    ' <button type="submit" class="btn btn-default">Искать</button>' +
  ' </form>';