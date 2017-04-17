/**
 * Created by Daniel on 4/10/2017.
 */
var testeApp = angular.module('testeApp', ['ngRoute','ngAnimate']);
testeApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about',{
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/links',{
            templateUrl: 'pages/links.html',
            controller: 'linksController'
        })
        .when('/contact',{
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
});
testeApp.controller('mainController',function($scope){
    $scope.message="PeidoHome";
});
testeApp.controller('aboutController',function($scope){
    $scope.message="PeidoAbout"
})
testeApp.controller('linksController',function($scope){
    $scope.message="PeidoLinks"
})
testeApp.controller('contactController',function($scope){
    $scope.message="PeidoContact"
})