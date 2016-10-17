require("script!jquery");
require("script!magnific-popup/dist/jquery.magnific-popup.js");
import 'magnific-popup/dist/magnific-popup.css';
require("script!flickity/dist/flickity.pkgd.min.js");
import 'flickity/dist/flickity.min.css';
import '../css/style.css';
import angular from 'angular';
import 'angular-route';
import searchForm from './components/searchForm/';
import listOutput from './components/listOutput/';
import singleNews from './components/singleNews/';
import slider from './components/slider/';
import routerConfig from './router-config';
import vkNewsService from './services/vkNews';

const app = angular.module("app", ["ngRoute"])
.config(['$routeProvider', routerConfig])
.component('searchForm', searchForm)
.component('listOutput', listOutput)
.component('singleNews', singleNews)
.component('slider', slider)
.factory('vkNewsService', ['$http', vkNewsService])
