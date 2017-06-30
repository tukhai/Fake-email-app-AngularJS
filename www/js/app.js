angular.module('EmailApp', [
    'ngRoute',
	'ngSanitize'
]).config(function ( $routeProvider ) {
    'use strict';
    // configure urls
    $routeProvider
        // inbox route
        .when('/inbox', {
			templateUrl: 'views/inbox.html',
			controller: 'InboxCtrl', // map js to html scope
			controllerAs: 'inbox'
		})
		.when('/inbox/email/:id', {
		    templateUrl: 'views/email.html',
		    controller: 'EmailCtrl',
		    controllerAs: 'email'
		})
		
		.when('/deleted', {
			templateUrl: 'views/deleted.html',
			controller: 'DeletedCtrl', // map js to html scope
			controllerAs: 'deleted'
		})
				
		.otherwise({ // default
			redirectTo: '/inbox'
		});
	}).run(function($rootScope){
			    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
				    console.log(event, current, previous, rejection)
			    })
			});
