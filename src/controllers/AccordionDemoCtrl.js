angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function(image, text) {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: image,
      text: text
    });
  };

  $scope.addSlide("church.jpg","谷山教会");
  $scope.addSlide("tapesenrei.jpg","主の洗礼");
  $scope.addSlide("tapeseirei.jpg","聖霊降臨");
  $scope.addSlide("tapemaria.jpg","受胎告知");
  $scope.addSlide("seihitu.jpg","聖櫃");
  $scope.addSlide("threesaints.jpg","三聖人");
  $scope.addSlide("noukotudou.jpg","納骨堂");
  $scope.addSlide("noukotudou-naibu.jpg","納骨堂内部");
  $scope.addSlide("saidan.jpg","祭壇");
  $scope.addSlide("cafeteria.jpg","カフェテリア");

});