var angular = require('angular')
require('../view/css/list.scss')
angular.module('homeList',[])
    .controller('homeListController',['$rootScope','$scope','$http',function($rootScope,$scope,$http) {
        // if(!$rootScope.$state.isLogin){
        //     $rootScope.$state.go('login');
        // }
        $scope.list = '';
        $http.get("./app/mock.json")
            .then(function (res) {
                $scope.list = res.data.list;
            });
    }])