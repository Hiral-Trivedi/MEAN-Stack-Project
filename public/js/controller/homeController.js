
'use strict';

module.exports = function($scope, $http) {

  var refresh = function () {
        $http.get('/city/getCity').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.cityList = response;
            $scope.citee = "";

        });
    };

    refresh();
//
//        $scope.addCity = function (citee) {
//          $http.post('/city/addCity', citee).success(function (response) {
//             console.log(response);
//             console.log("CREATE IS SUCCESSFUL");
//             refresh();
//        });
//    };
 };
// // 'use strict';
//
// // module.exports = function($scope, $http) {
//   // $scope.home = 'home';
//
//  // var refresh = function () {
//       //  $http.get('/movie/getMovie').success(function (response) {
//                   //  console.log('READ IS SUCCESSFUL');
//           //  $scope.movieList = response;
//
//       //  });
//   //  };
//
//     // refresh();
// // };
