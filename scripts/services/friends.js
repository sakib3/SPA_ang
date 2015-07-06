angular
	.module('app')
	.factory('Friends', function(){
		return {
			get: function(){
				return [
					{"name":"Sabbir", "age":28, "isSpecial": false},
					{"name":"Richard", "age":29, "isSpecial": true}
				]
			}
		};
	})