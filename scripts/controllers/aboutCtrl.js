 angular
 .module('app')
 // $scope is variable that can be accesable in the template
 .controller('aboutCtrl', ['$scope', function($scope){
 	$scope.title ="About";
 	$scope.items = ['thing1', 'thing2', 'thing3'];
 }]);
 