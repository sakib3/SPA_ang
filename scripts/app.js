// define module app and dependency
angular
	.module('app', ['ui.router'])
	// adding some rotes
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		//after # whatever written it goes to /
		$urlRouterProvider.otherwise('/');
		//save all states in
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
	}])