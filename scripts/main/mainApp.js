var mainApp = angular.module("mainApp", ['ngRoute', 'workoutApp']);

mainApp.config(function($routeProvider, $httpProvider){
	$routeProvider.

	when('/workoutPlans', {
		templateUrl: '../html/workoutPlans.html'
	}).

	when('/vanillaCake', {
		templateUrl: '../html/vanillaCake.html'
	}).

	when('/carrotCake', {
		templateUrl: '../html/carrotCake.html'
	}).

	when('/cheeseCake', {
		templateUrl: '../html/cheeseCake.html'
	}).

	when('/tiramisu', {
		templateUrl: '../html/tiramisu.html'
	}).

	when('/weddingCake', {
		templateUrl: '../html/weddingCake.html'
	}).

	otherwise({
		redirectTo: '/workoutPlans'
	});
})