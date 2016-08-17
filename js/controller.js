/**
 * Created by Administrator on 2016/8/15 0015.
 */

var bookShopCtrls=angular.module('bookshopCtrls',[]);

bookShopCtrls.controller('welcomeCtrl',['$scope',
    function($scope){
        $scope.greeting={
            text:'welcome'
        };
    }]);

bookShopCtrls.controller('bookListCtrl',['$scope',
    function($scope){
        $scope.books=[
            {title:"《童话》",author:"安徒生"},
            {title:"《西游记》",author:"吴承恩"},
            {title:"《红楼梦》",author:"曹雪芹"}];
    }]);

//可以增加多个
