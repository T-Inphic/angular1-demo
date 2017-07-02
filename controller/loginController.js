var angular = require('angular')
require('../view/css/login.scss')
angular.module('login',[])
    .controller('loginController',['$rootScope','$scope','$http',function($rootScope,$scope,$http) {
        $scope.username = '';
        $scope.password = '';
        $scope.isRight = false;
        $scope.tip = '';
        $scope.beginLogin = function() {
            $http.get("./app/mock.json")
                .then(function (res) {
                    if($scope.username == res.data.userInfo.username && $scope.password == res.data.userInfo.password){
                        $scope.isRight = true;
                        $rootScope.$state.isLogin = true;
                        $rootScope.$state.go('index.list');
                    }else{
                        $scope.isRight = false;
                        $scope.tip = '账号和密码错误';
                    }
                });
        }
    }])