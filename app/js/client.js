require('angular/angular');
require('angular-route');

var demoApp = angular.module('demoApp', ['ngRoute']);

// Leaving this code in for educational purposes, we will try to add a controller as our next step

// demoApp.controller('awesomeController', function($scope) {
//   $scope.greeting = 'Hello World!';
//   $scope.awesomeThings = ['unicorns', 'rainbows', 'kittens', 'Megaman', 'dragons', '!packers'];
//   $scope.submitGreeting = function() {
//     console.log($scope.greeting);
//     $scope.greeting = '';

//     //This is where we would send off to the database
//   }
// });

demoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/styletile', {
      templateUrl: 'views/styletile.html',
      // controller: 'awesomeController'
    })
    .otherwise ({
      redirectTo: '/styletile'
    });
}]);
