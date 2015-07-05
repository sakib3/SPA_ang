// define module app and dependency
angular
	.module('app', ['ui.router'])
	// adding some rotes
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		//after # whatever written it goes to /
		$urlRouterProvider.otherwise('/');
		//save all states in
		$stateProvider
			// http://localhost:8000/#/
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
			//http://localhost:8000/#/about
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})
			//http://localhost:8000/#/contact 
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.html'
			})
	}])