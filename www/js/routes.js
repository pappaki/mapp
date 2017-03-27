angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('tripPlanner', {
      url: '/',
      templateUrl: 'templates/tripPlanner.html',
      controller: 'tripPlannerCtrl'
    })
    .state('yourRoute', {
      url: '/map?from_latitude&from_longitude&to_latitude&to_longitude',
      templateUrl: 'templates/yourRoute.html',
      controller: 'yourRouteCtrl'
    })

$urlRouterProvider.otherwise('/')

  

});
