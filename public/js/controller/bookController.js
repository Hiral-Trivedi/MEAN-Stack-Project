//
// module.exports = function($scope, $http, $rootScope, $location) {
//   $scope.details = " ";
//   $scope.qwerty='';
//   $scope.lkjhg="QWERTY";
//   $scope.theatre='';
//   // $scope.detailsList =response;
//
//   var bookingShow=function(){
// var data=sessionStorage.getItem('xyz');
// //var data=$rootScope.movieName;
// $http.get('/assign/selmoviename/'+data).success(function(response){
//   $scope.details=response;
// });
// $http.get('/movie/moviePoster/'+data).success(function(response){
//  $rootScope.movi=response;
//
//  sessionStorage.setItem('movieList',$rootScope.movi);
//  });
//
//
// // console.log(sessionStorage.getItem('moviedata'));
// };
// bookingShow();
//
// $scope.movDates=[];
// var showDates=function() {
// for(i=0;i<6;i++)
// {
//   var date=new Date();
//   date.setDate(date.getDate()+i);
//   $scope.movDates[i]=date;
//   // $scope.movDates[i].toString();
// }
// };
// showDates();
//
//
// var a = $scope.qwerty.Theatre;
//
//
// $scope.setShow =function(){
//
//   sessionStorage.setItem('thr',  a);
//   sessionStorage.setItem('city', $scope.qwerty.city);
//   sessionStorage.setItem('shotim', $scope.qwerty.time);
//   sessionStorage.setItem('dt', $scope.qwerty.Date);
// }
//
//
// };
'use strict';

module.exports = function($scope, $http) {

    $scope.booking = 'booking';
    $http.get('/mapping/getMapping').success(function(response){
    $scope.MapList = response;
    });

  }//line3
