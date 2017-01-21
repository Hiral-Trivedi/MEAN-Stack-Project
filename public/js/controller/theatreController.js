'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';

  var refresh = function () {
        $http.get('/theatre/getTheatre').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theatreList = response;
            $scope.theatre = "";
        });
    };
    refresh();

    $scope.addTheatre = function (theatre) {

        var cty  = document.getElementById("citySelect");
        var cty1 = cty.options[cty.selectedIndex].text;
        theatre.theatreCity = cty1;

        var tim  = document.getElementById("showtimeSelect");
        var tim1 = tim.options[tim.selectedIndex].text;
        theatre.theatreTime = tim1;

        var tim2 = document.getElementById("showtimemSelect");
        var tim3 = tim.options[tim.selectedIndex].text;
        theatre.theatreTimem = tim3;

        var tim4 = document.getElementById("showtimepSelect");
        var tim5 = tim.options[tim.selectedIndex].text;
        theatre.theatreTimep = tim5;

     $http.post('/theatre/addTheatre', theatre).success(function (response) {
     console.log(response);
     console.log("CREATE IS SUCCESSFUL");
     refresh();
        });
    };

    $scope.removeTheatre = function (theatre) {
        //console.log(id);
        $http.delete('/theatre/deleteTheatre/' + theatre._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheatre = function (theatre) {
         $http.get('/theatre/getTheatre/' + theatre._id).success(function (response) {
            $scope.theatre = response[0];
        });
    };

    $scope.updateTheatre = function () {
        console.log("REACHED UPDATE");
        console.log($scope.theatre._id);
        $http.put('/theatre/updateTheatre/' + $scope.theatre._id, $scope.theatre).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
