var eventApp = angular.module('eventApp', []);

eventApp.controller('EventCtrl', function($scope, $http){
  $http.get('event.json').success(function(data){
    $scope.events=data; //return a promise object
  });
  //$scope.events = [
  //  {
  //    "DOW"  :"Sun",
  //    "begin":"10:00",
  //    "end"  :"11:00",
  //    "content":["合唱団練習","choir.html"],
  //    "remarks":["場所:教会聖堂","decoration.html"]
  //  },
  //  {
  //    "DOW"  :"Tue",
  //    "begin":"10:00",
  //    "end"  :"",
  //    "content":["ロザリオの祈り",""],
  //    "remarks":["",""]
  //  },
  //  {
  //    "DOW"  :"Wed",
  //    "begin":"19:30",
  //    "end"  :"",
  //    "content":["聖書勉強会","bible.html"],
  //    "remarks":["畳部屋",""]
  //  },
  //  {
  //    "DOW"  :"Thu",
  //    "begin":"09:00",
  //    "end"  :"17:00",
  //    "content":["聖体礼拝",""],
  //    "remarks":["赦しの秘跡",""]
  //  },
  //  {
  //    "DOW"  :"Thu",
  //    "begin":"10:00",
  //    "end"  :"11:30",
  //    "content":["レジオ・マリエ",""],
  //    "remarks":["",""]
  //  },
  //  {
  //    "DOW"  :"Fri",
  //    "begin":"20:00",
  //    "end"  :"",
  //    "content":["召命のロザリオ",""],
  //    "remarks":["",""]
  //  },
  //  {
  //    "DOW"  :"Sat",
  //    "begin":"14:30",
  //    "end"  :"16:00",
  //    "content":["教会学校","school.html"],
  //    "remarks":["",""]
  //  }
  //];

  $scope.orderProp = 'begin';
});