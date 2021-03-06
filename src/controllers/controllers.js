var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope){
  $scope.updates = [
    {
      text: "Webサイトを更新しました",
      data: "9/2/2004"
    },
    {
      text: "Webサイトを更新しました",
      data: "2/8/2004"
    }
  ];
});

phonecatApp.controller('PentecostListCtrl', function($scope, $http){
  $http.get('data/pentecost.json').success(function(data){
    $scope.data=data;
  });
});

phonecatApp.controller('SchoolListCtrl', function($scope, $http){
  $http.get('data/school_list.json').success(function(data){
    $scope.data=data;
  });
});

phonecatApp.controller('DecorationListCtrl', ['$scope','$http',
                                              function($scope, $http){
                                                $http.get('data/decoration.json').success(function(data){
                                                  $scope.data=data;
                                                  //$scope.$apply();
                                                });
                                              }]);

phonecatApp.controller('ChoirListCtrl', function($scope, $http){
  $http.get('data/choir_list.json').success(function(data){
    $scope.data=data;
  });
});
