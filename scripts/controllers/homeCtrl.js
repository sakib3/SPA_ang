 angular
 .module('app')
 // $scope is variable that can be accesable in the template
 .controller('homeCtrl', ['$scope', '$http', 'friends', function($scope, $http,friends){
 	$scope.title ="Home";
 	$scope.items = ['home', 'about', 'contact'];
 	$scope.selectedValue =$scope.items[0];
 	$scope.friends = friends;

 	$scope.save = function(){
 		$http.post('/api/friends', friends);
 	};
 }]);
 