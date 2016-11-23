angular.module('starter')

.controller('livsmedelCtrl', function($scope, $http) {
	$scope.fields = [];
	$scope.datas =[];
	$scope.loadData = function() {
		$http({
			method: 'GET',
			url: 'https://api.nutritionix.com/v1_1/search/apple?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=84680fd3&appKey=74a006e0d6041a5fc4fadca06ca5ee4d'
		}).then(function successCallback(response) {
			//console.log(response.data);
			$scope.datas = response.data.hits;	
		}, function errorCallback(response) {
			$scope.datas = response.data || "Request failed";
		});
	}
})
.controller('searchCtrl', function($scope, $http, $ionicScrollDelegate){
  $scope.foodItems = {};
    $scope.foodItems.results = [];
    $scope.foodItems.query = '';
    $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop(true);   
    };
    $scope.data = {
    showDelete: false
  };

    $scope.search = function() {
      if ($scope.foodItems.query != '') {
        $http({
            method: 'GET',
            url: 'https://api.nutritionix.com/v1_1/search/'+ $scope.foodItems.query +'?fields=item_name,brand_name,nf_calories&item_type=3&appId=84680fd3&appKey=74a006e0d6041a5fc4fadca06ca5ee4d'
        }).then(function successCallback(response) {
            $scope.foodItems.results = response.data.hits;
            console.log($scope.foodItems.results);
            }, function errorCallback(response) {
             $scope.datas = response.data || "Request failed";

          });
      };
    };
    
})
.controller('showItemCtrl',function($scope, $http, $stateParams){
   $scope.foodItem = {};
   var showFood = $stateParams.id;
   console.log(showFood);
   $scope.showItem = function(){
        $http({
          method: 'Get',
          url: 'https://api.nutritionix.com/v1_1/item?id=' + showFood +'&appId=84680fd3&appKey=74a006e0d6041a5fc4fadca06ca5ee4d'
        }).then(function successCallback(response){
          $scope.foodItem = response.data;
        }, function errorCallback(response){
         $scope.datas = response.data  || "Request failed";
        });
    
    };
    $scope.showItem();
})
.controller('bloggItem', function($scope, Blogg, $stateParams ){

$scope.singleItem = Blogg.get($stateParams.id);
})

.controller('bloggCtrl', function($scope, Blogg){

  $scope.blogg = Blogg.all;

  /*var ref = new Firebase('https://calapp.firebaseio.com');
  $scope.messages = $firebaseObject(ref);
   $scope.removeMessage = function(e) {
          console.log(e);
          $scope.messages.$remove(e);
        }*/
    $scope.recs = Blogg.all;
   $scope.remove = function(id) {
                var rem = $scope.recs.$getRecord(id);
                $scope.recs.$remove(rem);
                return true;
            }

  
  /*$scope.blogg = Blogg;
  $scope.blogg.$loaded(function(){
    if($scope.blogg.length===0){
     $scope.blogg.$add({
      title:"Ångest över en broccoli",
      date: "16 maj 2016 kl 09:38",
      img :"img/perry.png",
      author :"Linda Bergh",
      paragraph :"GMO-debatten är en ständigt pågående diskussion där fakta och känslor sällan möts. Ibland kan det bli riktigt skojigt! Dagens EU-lagstiftning bygger på reglering av en mer än 30 år gammal teknologi, och där den använda tekniken lämnar spår i den modifierade organismen. Med nyare biotekniska metoder är det möjligt att öppna och föra in eller ersätta gener utan att det går att skilja den gjorda modifieringen från det som kan göras med traditionell växtförädling. Det innebär att eftersom den tekniken inte går att spåra går den heller inte att lagstifta kring. Det är en broccoli med förhöjd halt av ett i kålväxter normalt förekommande bioaktivt ämne, glucoraphanin. Liksom flera andra glukosinolater har den visat sig hämma tumörtillväxt, vilket alltså skulle vara bra ur hälsosynpunkt. Men höjning av näringsämnen i våra grönsaker och livsmedel är en ovälkommen förändring i Ennarts värld, eftersom man inte kan veta om det är farligt att höja halten. Dessutom är det ytterst tveksamt att man använt en växtförädlingsteknik som inte är GMO. (Att det är Monsanto som står bakom den nya broccolin gör det ännu mera suspekt, även om det inte går att förstå varför.)" 

    });
     $scope.blogg.$add({
     title: "Ät klokt – om du vill komma i toppform",
     date: "10 maj 2016 kl 14:00",
     img: "img/mike.png",
     author :"Av Camilla Victoria Marcinkowski",
    paragraph :"Enligt den senaste forskningen bör den som tränar minst 2–3 gånger i veckan helst äta 1,2–1,7 gram protein per kilo kroppsvikt per dag. Väger man 75 kg är det alltså bra om man får i sig mellan 90 och 130 gram protein varje dag. Protein bygger upp muskelmassa och ledband, stärker immunförsvaret och producerar enzymer som deltar i energiförbränningen. Även om behovet av protein ökar när man tränar behöver man enligt de flesta experter inte äta protein i pulverform. Men det är heller inte oväsentligt var det dagliga proteinet kommer ifrån. Får man främst i sig protein från kött riskerar man att blodets fett- och kolesterolhalter stiger, vilket i sin tur ökar risken för hjärt-kärlsjukdomar. Då är det bättre att ersätta en del av köttproteinet med växtprotein – t.ex. från soja, bönor och linser. Det gör att man får i sig mindre fett och mer fibrer, vilket dessutom mättar bättre. Den proteinrika måltiden bör helst intas direkt efter träningspasset, eftersom återhämtningen då går snabbare. Kolhydrater. Både när man tränar och när man behöver energi för tankeverksamheten vill kroppen helst ha kolhydrater som bränsle. Experterna rekommenderar att den som tränar regelbundet bör få i sig mellan 5 och 8 gram kolhydrater per kilo kroppsvikt per dag. Kolhydraterna lagras som glykogen i muskler och lever, och bränslereserven kommer till användning när den behövs. Det bästa är att äta kolhydrater som tas upp långsamt i kroppen – t.ex. fullkornsprodukter, råris och grova grönsaker istället för snabba kolhydrater som godis och energikakor. Däremot har man sällan nytta av sportdryck trots att man tränar hårt – man måste faktiskt träna i mer än 90 minuter innan kroppens kolhydratdepåer är tömda. Under timmarna före ett träningspass kan man bygga upp lagren genom att äta frukt eller dricka lite juice. Efter träningspasset passar det bra med 1–2 frukter och en energikaka med 10–20 gram protein. Fett. Efter att nästan varit panikslagna kring risken med att få i sig fett genom kosten är många träningsexperter nu istället överens om att man bör äta en måttlig mängd nyttigt fett. Sambandet mellan fett och prestation är starkt, och forskning visar t.ex. att fiskens omega-3-fettsyror både hjälper till att minska de inflammatoriska tillstånd som orsakar träningsvärk och som återuppbygger skadade celler. Tränar man mycket bör man äta cirka 1 gram fett per kilo kroppsvikt per dag. Bra källor till nyttigt fett är fisk, avokado, nötter samt vegetabiliska oljor. "
    });
    }
  });*/


})

.controller('deleteCtrl', function($scope, Blogg, $state, $ionicActionSheet){
  $scope.bloggItem = Blogg.all;
  $scope.showDetails = function(id){
    $ionicActionSheet.show({
      destructiveText: 'Delete',
      titleText: 'Sure you want to delete?',
      cancelText: 'Cancel',
      destructiveButtonClicked: function(){
        var rem = $scope.bloggItem.getRecord(rem);
        return true;
      }
    });
  };
})

.controller("saveCtrl", function($scope, Blogg, $state, $ionicActionSheet){
  $scope.save = function(){
  $scope.bloggSave = Blogg.all;
  $scope.bloggSave.$add({
            title: $scope.blogg.title,
            date: $scope.date,
            author: $scope.author,
            paragraph: $scope.paragraph

        });
        $state.go('meny.blogg');
    };
    /*$scope.blogg = Blogg;
  $scope.showDetails = function(id){
    $ionicActionSheet.show({
      destructiveText: 'Delete',
      titleText: 'Sure you want to delete?',
      cancelText: 'Cancel',
      destructiveButtonClicked: function(){
        var rem = $scope.bloggItem.getRecord(rem);
        return true;
      }
    });
  };*/
})
.controller('editCtrl', function($scope, $stateParams, Blogg, $state, $ionicListDelegate){
   $scope.allitems = Blogg.all;
    $scope.itemSingle = Blogg.get($stateParams.id);
    $scope.title = $scope.itemSingle.title;
    $scope.date =  $scope.itemSingle.date;
    $scope.author = $scope.itemSingle.author;
    $scope.paragraph = $scope.itemSingle.paragraph;
    $scope.myid = $scope.itemSingle.$id;
    $scope.updateBlogg = function(id) {
        var ed = $scope.allitems.$getRecord(id);
        ed.title = $scope.title;
        ed.date = $scope.date;
        ed.author = $scope.author;
        ed.paragraph = $scope.paragraph;
        $scope.allitems.$save(ed);
        $ionicListDelegate.closeOptionButtons();
        $state.go('meny.blogg'); 
    };


})

/*.controller('editCtrl', function($scope, $stateParams, Blogg){
    var item = Blogg.all.$getRecord($stateParams.itemId);

  $scope.save = function(){
    $state.go('meny.blogg');
  };
  $scope.delete = function(){
    Blogg.all.$remove(item);
     $state.go('meny.blogg');
  };

})*/
