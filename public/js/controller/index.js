'use strict';

var app = require('angular').module('movieApp');

app.controller('BookingController', require('./bookingController'));
app.controller('CancellationController', require('./cancellationController'));
app.controller('HomeController', require('./homeController'));
app.controller('MovieController', require('./movieController'));
app.controller('TheatreController', require('./theatreController'));
app.controller('CityController', require('./cityController'));
app.controller('ShowtimingController', require('./showtimingController'));
app.controller('SignupController', require('./signupController'));
app.controller('LoginController', require('./loginController'));
//app.controller('AssignController', require('./assignController'));
app.controller('MappingController', require('./mappingController'));
app.controller('BookController', require('./bookController'));
app.controller('SeatsController', require('./seatsController'));
