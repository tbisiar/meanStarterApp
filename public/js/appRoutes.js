// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    // engineer page
    .when('/engineer', {
      templateUrl: 'views/engineer.html',
      controller: 'EngController'
    })

    // explore page
    .when('/explore', {
      templateUrl: 'views/explore.html',
      controller: 'ExploreController'
    })

    // innovate page
    .when('/innovate', {
      templateUrl: 'views/innovate.html',
      controller: 'InnovateController'
    });

  $locationProvider.html5Mode(true);
}]);


