var ike = angular.module('ike', ['ui.router']);

ike.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url:'',
        views: {
            // 'header': {
            //     templateUrl:'html/header.html',
            //     controller:'HeaderCtrl'
            // },
            'home': {
                templateUrl:'html/home.html'
            },
        }
    }); //end view state
});  //end config
