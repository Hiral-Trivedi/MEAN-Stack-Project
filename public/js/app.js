
'use strict';


var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

require('../css/app.scss');
require('./controller');

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/start.html',
    // controller: 'HomeController',
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
})
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'SignupController',
    // controllerAs: 'vm'
  })

  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })
  .when('/cancellation', {
    templateUrl: 'views/cancellation.html',
    controller: 'CancellationController',
  })
  .when('/movie', {
    templateUrl: 'views/movie.html',
    controller: 'MovieController',
  })
  .when('/theatre', {
    templateUrl: 'views/theatre.html',
    controller: 'TheatreController',
  })
  .when('/city', {
    templateUrl: 'views/city.html',
    controller: 'CityController',
  })
  .when('/showtiming', {
    templateUrl: 'views/showtiming.html',
    controller: 'ShowtimingController',
  })

  //.when('/assign',{
    //templateUrl:'views/assign.html',
    //controller:'AssignController',
  //})
  .when('/mapping', {
    templateUrl: 'views/mapping.html',
    controller: 'MappingController',
  })
  .when('/bookingshow', {
    templateUrl: 'views/bookingshow.html',
    controller: 'BookController',
  })
  .when('/seats', {
    templateUrl: 'views/seats.html',
    controller: 'SeatsController',
  })
  .when('/pay', {
    templateUrl: 'views/payment.html',
    // controller: 'SeatsController',
  })


  .otherwise({
    redirectTo: '/',
  });
});
