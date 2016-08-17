

var bookShopApp=angular.module('bookshop',[
    'ngRoute','ngAnimate','bookshopCtrls'
]);

//[]里面包含各个模块


bookShopApp.config(function($routeProvider){
    $routeProvider.when('/welcome',{
        templateUrl:'templs/welcome.html',
        controller:'welcomeCtrl'
    }).when('/booklist',{
        templateUrl:'templs/bookList.html',
        controller:'bookListCtrl'
    }).otherwise({
        redirectTo:'welcome'
    })
});

/**
 * Created by Administrator on 2016/8/15 0015.
 */
