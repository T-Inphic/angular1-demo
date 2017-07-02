var angular = require('angular')
var homeList = require('./homeListController.js')
require('../view/css/index.scss')
angular.module('index',['homeList'])
    .controller('indexController',['$rootScope','$scope','$http',function($rootScope,$scope,$http) {
        // if(!$rootScope.$state.isLogin){
        //     $rootScope.$state.go('login');
        // }
        $http.get("./app/mock.json")
            .then(function (res) {
                
            });
    }])