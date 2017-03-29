// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    

    
    

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })


     $stateProvider.state('about', {
        url: '/about',
       templateUrl: 'templates/about.html'

    })

   $stateProvider.state('brandedexamples', {
        url: '/brandedexamples',
        templateUrl: 'templates/brandedexamples.html'
    })

        $stateProvider.state('videoproduction', {
        url: '/videoproduction',
        templateUrl: 'templates/videoproduction.html'
    });

    $urlRouterProvider.otherwise('/home');     

}); // closes $routerApp.config()


