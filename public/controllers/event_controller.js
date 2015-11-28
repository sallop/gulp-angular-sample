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
  //    "content":["�����c���K","choir.html"],
  //    "remarks":["�ꏊ:�����","decoration.html"]
  //  },
  //  {
  //    "DOW"  :"Tue",
  //    "begin":"10:00",
  //    "end"  :"",
  //    "content":["���U���I�̋F��",""],
  //    "remarks":["",""]
  //  },
  //  {
  //    "DOW"  :"Wed",
  //    "begin":"19:30",
  //    "end"  :"",
  //    "content":["�����׋���","bible.html"],
  //    "remarks":["������",""]
  //  },
  //  {
  //    "DOW"  :"Thu",
  //    "begin":"09:00",
  //    "end"  :"17:00",
  //    "content":["���̗�q",""],
  //    "remarks":["�͂��̔��",""]
  //  },
  //  {
  //    "DOW"  :"Thu",
  //    "begin":"10:00",
  //    "end"  :"11:30",
  //    "content":["���W�I�E�}���G",""],
  //    "remarks":["",""]
  //  },
  //  {
  //    "DOW"  :"Fri",
  //    "begin":"20:00",
  //    "end"  :"",
  //    "content":["�����̃��U���I",""],
  //    "remarks":["",""]
  //  },
  //  {
  //    "DOW"  :"Sat",
  //    "begin":"14:30",
  //    "end"  :"16:00",
  //    "content":["����w�Z","school.html"],
  //    "remarks":["",""]
  //  }
  //];

  $scope.orderProp = 'begin';
});