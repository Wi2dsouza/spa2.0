var app = angular.module("app", ["ngRoute"]); 

app.config(function($routeProvider){
	$routeProvider

		.when('/', {
			templateUrl: 'templates/home.html',
			controller: "HomeController"
		})

		.when('/pagina1', {
			templateUrl: 'templates/p1.html',
			controller: "ControllerP1"
		})

		.when('/pagina2', {
			templateUrl: 'templates/p2.html'
		})

		.when('/pagina3', {
			templateUrl: 'templates/p3.html'
		})

		.otherwise ({redirectTo : '/' });

}); 

app.controller("HomeController", function($scope){
	$scope.message = "Hello from Home Controller";
});

app.controller("ControllerP1", function($scope){
	$scope.message = "Pagina nº1";
});