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
				templateUrl: 'templates/home.html',
				//define a controller
				controller: 'homeCtrl',
				//fetch data
				resolve: {
					friends: ['$http', function($http){
						return $http.get('/api/friends.json').then(function(response){
							//parsing data
							return response.data;
						});
					}]
				}
			})
			//http://localhost:8000/#/about
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
			//http://localhost:8000/#/contact 
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.html'
			})
	}])