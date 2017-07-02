var angular = require('angular')
var login = require('./controller/loginController.js')
var index = require('./controller/homeController.js')
require('angular-ui-router')
require('./view/css/reset.scss')
angular.module('webapp',['ui.router','login','index'])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$state.isLogin = false;
    })
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider.state('login',{
            url: '/login',
            templateUrl: './view/html/login.html',
        }).state('index',{
            url: '/index',
            templateUrl: './view/html/index.html'
        }).state('index.list',{
            url: '/list',
            templateUrl: './view/html/home.html'
        })
    }])
    