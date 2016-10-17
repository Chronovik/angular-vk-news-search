export default () => 
  '<div class="singleNews">' +
    '<div class="singleNews__likes"><b>Дата: {{$ctrl.date}}</b></div>' +
    '<div class="singleNews__likes"><b>Автор: {{$ctrl.authors}}</b></div>' +
    '<div class="singleNews__likes"><b>Лайков: {{$ctrl.likes}}</b></div>' +
    '<p ng-bind-html="$ctrl.text"></p>' +
    '<slider ng-if="$ctrl.attachments.length" slides="$ctrl.attachments"></slider>' +
  '</div>';