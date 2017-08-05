// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp .config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
	// $urlRouterProvider.hashPrefix('');
    
    

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: function() {
            $('.testimonials .testimonials-content').flickity({
                wrapAround: true,
                pageDots: true,
                prevNextButtons: false,
                autoPlay: 5000
            });
        }
    })


     $stateProvider.state('contact', {
        url: '/contact',
       templateUrl: 'templates/contact.html'

    })

   $stateProvider.state('ourstory', {
        url: '/ourstory',
        templateUrl: 'templates/ourstory.html'
    })

        $stateProvider.state('services', {
        url: '/services',
        templateUrl: 'templates/services.html'
    });        

        $stateProvider.state('testimonials', {
        url: '/testimonials',
        templateUrl: 'templates/testimonials.html',
        controller: function() {
            $('.testimonials .testimonials-content').flickity({
                wrapAround: true,
                pageDots: true,
                prevNextButtons: false,
                autoPlay: 5000
            });
        }
    });

    $urlRouterProvider.otherwise('/home');     

}); // closes $routerApp.config()


