import app from "../base"

import { ElModule } from 'element-angular'

// if you use webpack, import style
import 'element-angular/theme/index.css'

app.controller("PublicController", ["$rootScope", "$scope", "$state", '$q', '$location', 'dataService', function ($rootScope, $scope, $state, $q, $location, dataService) {
    $scope.init = function () {
        $scope.initParams();
        $state.go("home")
    };

    $scope.initParams = function () {
        $rootScope.swal = Swal;
        $rootScope.userId = null;
        $rootScope.login = false;
        $scope.wait = false;
        // $rootScope.fileServer = "http://101.43.7.161:3001"
        // $rootScope.fileServer = "http://43.155.100.23:3001"
        $rootScope.fileServer = "https://www.cube.fan:3001"
        $rootScope.typeLibrary = {
            python: "Python",
            go: "Go",
            java: "Java",
            javaScript: "JavaScript",
            "c++": "C++",
            c: "C",
            redis: "Redis",
            rabbitmq: "Rabbitmq",
            docker: "Docker",
            kubernetes: "kubernetes",
            microServices: "微服务",
            mysql: "Mysql",
            network: "网络",
            dataStructure: "数据结构和算法",
            operatingSystem: "操作系统",
            computerComposition: "计算机组成原理",
            live: "生活"
        };
    };

    $rootScope.loginStatusCheck = function () {
        let defer = $q.defer()
        dataService.callOpenApi("login.status", {}, "login").then(function (data) {
            defer.resolve(data)
        })
        return defer.promise;
    }

    $rootScope.PhoneMessage = {
        "LimitExceeded.PhoneNumberOneHourLimit": "该手机号1小时内下发短信条数超过上限",
        "LimitExceeded.PhoneNumberDailyLimit": "该手机号日下发短信条数超过设定的上限",
        "LimitExceeded.PhoneNumberThirtySecondLimit": "该手机号30秒内下发短信条数超过设定的上限"
    }

}])