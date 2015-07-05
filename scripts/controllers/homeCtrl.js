 angular
 .module('app')
 // $scope is variable that can be accesable in the template
 .controller('homeCtrl', ['$scope', function($scope){
 	$scope.title ="Home";
 	$scope.items = ['home', 'about', 'contact'];
 }]);
 