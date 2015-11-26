var DecorationApp = angular.module('DecorationApp', ['ui.bootstrap']);

DecorationApp.controller('DecorationController', function ($scope, $modal, $log, $http){
  //$scope.items = [
  //  "img/noukotudou-naibu.jpg",
  //  "img/noukotudou.jpg",
  //  "img/saidan.jpg",
  //  "img/seihitu.jpg",
  //  "img/tapemaria.jpg",
  //  "img/tapeseirei.jpg",
  //  "img/tapesenrei.jpg",
  //  "img/threesaints.jpg",
  //  "img/cafeteria.jpg"
  //];

  $http.get('data/decoration.json').success(function(data){
    $scope.items = data;
  });
  
  $scope.open = function (image) {
    $scope.image = image;
    console.log(image);
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        items: function () {
          return $scope.image;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
DecorationApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
  $scope.items = items;
  $scope.selected = {
    item: $scope.items
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

  /*
$scope.open = function (size) {
var modalInstance = $modal.open({
templateUrl: 'myModalContent.html',
controller: 'ModalInstanceCtrl',
size: size,
resolve: {
items: function () {
return $scope.items;
}
}
});

modalInstance.result.then(function (selectedItem) {
$scope.selected = selectedItem;
}, function () {
$log.info('Modal dismissed at: ' + new Date());
});
};
   */

/*
$http.get('data/decoration.json').success(function(data){
$scope.slides=slides;
});
$scope.myInterval = 5000;
var slides = $scope.slides=[{
"img":"img/tapesenrei.jpg",
"title":"主の洗礼",
"text":"イエズス様の洗礼の場面。洗礼者ヨハネの隣に、水の中に立たれたイエズス様の上に聖霊が下ってきました。この時、イエズス様は神に愛された子として公に紹介されました。"
},{
"img":"img/tapeseirei.jpg",
"title":"聖霊降臨",
"text":"聖堂に入った正面にある象徴的なタペストリーです。使徒たちが集まって祈りをしているところへ聖霊が下った模様を表しています。私たちの教会が「聖霊に捧げられた教会」であることを考えさせています。"
},{
"img":"img/tapemaria.jpg",
"title":"受胎告知",
"text":"聖母マリア様へのお告げの場面で、次の聖書の言葉を表現しています:「聖霊があなたに望み、いと高きおん者の力があなたを覆うでしょう。それゆえ、お生まれになる子は聖なるもので、神の子と呼ばれます。」"
},{
"img":"img/saidan.jpg",
"title":"祭壇",
"text":"祭壇中央に据えられた木製の祭壇は、大隈国見岳より運ばれたタブの大木から作られたもので、製作者は彫刻家の楠畑裕也氏です。 その上の書見台は陶芸家竹之内彬裕氏の製作によるもので、 最後の晩餐とレデンプトール会の紋章が窯き込まれています。 "
},{
"img":"img/seihitu.jpg",
"title":"聖櫃",
"text":"祭壇向かって左側の聖櫃台は同じく楠畑氏の作品、上に置かれた聖櫃はドイツ（ミュンヘン）から寄贈されたものです。"
},{
"img":"img/threesaints.jpg",
"title":"三聖人",
"text":"三聖人の御像は、左から、聖クレメンス・ホフバウアー（レデンプトール会の活動を初めて北ヨーロッパに広めた）、聖アルフォンソ、聖ジェラルド・マイエラー（神への全くの信頼と委ねにより修道者の鑑とされる）"
},{
"img":"img/noukotudou.jpg",
"title":"納骨堂",
"text":"納骨堂は平成10年に建築され、現在46家族の遺骨が祀られています。"
},{
"img":"img/noukotudou-naibu.jpg",
"title":"納骨堂内部",
"text":""
},{
"img":"img/cafeteria.jpg",
"title":"カフェテリア",
"text":"別棟のカフェテリアは、聖アルフォンソの名前「リゴーリ」を戴き、信徒憩いの場で「Lの会」がコーヒーショップを運営しています。"
}];
 */
