var profile = angular.module('profile', []);

profile.controller('ProfileListCtrl', function($scope){
  /*
$http.get('top_table.json').success(function(data){
$scope.toptable=data;
});
   */
  $scope.contact_information = [
    {
      key  :"住 所",
      value:"〒891-0113 鹿児島市東谷山２丁目33番13号"
    },{
      key  :"電 話",
      value:"０９９－２６８－２０８４"
    },{
      key  :"ファックス",
      value:"０９９－２８４－５７３８"
    },{
      key  :"E-Mail",
      value:"設定中"
    },{
      key  :"主任司祭",
      value:"頭島　光"
    },{
      key  :"協力司祭",
      value:"ヨセフ・ムイベルガ"
    },{
      key  :"修道院メンバー",
      value:"神父：ムイベルガ,頭島 光"
    },{
      key  :"カテキスタ",
      value:"Sr.下川 千穂子"
    },{
      key  :"信徒会長",
      value:"大野"
    }
  ];

  $scope.histories=[
    {
      year :"1928年（昭和3）",
      event:"現在のラ・サール学園の地にフランシスコ会（カナダ管区）が修道院並びに教会を設立し教区長館を併設。"},{
        year : "1931年（昭和6）",
	event:"小神学校及び大神学校を開設。"
      },{
	year : "1933年（昭和8）",
	event:"孤児収容施設（白百合寮）を開設。"
      },{
	year : "1934年（昭和9）",
	event:"幼稚園開設。"
      },{
	year : "1935年（昭和10）",
	event:"聖アンナ修道会により診療所を開設。"
      },{
	year : "1937年（昭和12）",
	event:"軍部の圧力により全施設を閉鎖。",
      },{
	year : "1944年（昭和19）",
	event:"純心高女谷山へ移転。"
      },{
	year : "1949年（昭和24）",
	event:"善き牧者女子修道会による愛の聖母園開設。"
      },{
	year : "1950年（昭和25）",
	event:"ラ・サール学園開設。"
      },{
	year : "1953年（昭和28）",
	event:"マイエル、ミタマヤ、ヤロシュの三神父来日。"
      },{
	year : "1954年（昭和29）",
	event:"来鹿して川内カトリック教会に着任。"
      },{
	year : "1955年（昭和30）",
	event:"宗教法人「カトリック贖罪主修道会」設立。"
      },{
	year : "1957年（昭和32）",
        event:"レデンプトール会司祭、ラ・サール学園内に居住し司牧を掌る。"
      },{
	year : "1964年（昭和39）",
	event:"聖堂献堂式、小教区の発足。"
      },{
	year : "1971年（昭和46）",
	event:"ひまわり幼稚園を買収し継承する。"
      },{
	year : "1976年（昭和51）",
	event:"新教会聖堂落成。"
      }
  ];
});
