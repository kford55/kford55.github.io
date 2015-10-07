var myApp = angular.module('PersonalWebsiteApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/partials/home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "/partials/home.html#about"
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "/partials/projects.html"
    })    
    .state('contact', {
      url: "/contact",
      templateUrl: "/partials/contact.html"
    });
    $locationProvider.html5Mode(true);
});