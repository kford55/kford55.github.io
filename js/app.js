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
      templateUrl: "/partials/about.html"
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "/partials/projects.html"
    })    
    .state('experience', {
      url: "/experience",
      templateUrl: "/partials/experience.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "/partials/contact.html"
    });

});