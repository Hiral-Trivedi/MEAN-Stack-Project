'use strict';

module.exports = function($scope, $http) {

  var refresh = function () {
        $http.get('/showtiming/getShowtiming').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.showtimingList = response;
            $scope.showtime= "";

        });
    };

    refresh();

       $scope.addShowtiming = function (showtime) {
         $http.post('/showtiming/addShowtiming', showtime).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();

       });
     };


    $scope.removeShowtiming = function (showtime) {
        $http.delete('/showtiming/deleteShowtiming/' + showtime._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editShowtiming = function (showtime) {
         $http.get('/showtiming/getShowtiming/' + showtime._id).success(function (response) {
            $scope.showtime = response[0];
        });
    };

    $scope.updateShowtiming = function () {
        console.log("REACHED UPDATE");
        console.log($scope.showtime._id);
        $http.put('/showtiming/updateShowtiming/' + $scope.showtime._id, $scope.showtime).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
