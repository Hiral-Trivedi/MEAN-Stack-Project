module.exports = function($scope, $http) {
  $scope.seats = 'seats';

  $("#selectClass").on('change', function() {
  if ($(this).val() == "200") {
     $(".slrCls").attr("disabled", "disabled");
  } else {
     $(".slrCls").removeAttr("disabled");
  }
});

  $("#selectClass").on('change', function() {
    if ($(this).val() == "100") {
   $(".gldCls").attr("disabled", "disabled");
 } else {
   $(".gldCls").removeAttr("disabled");
 }
});

    var selectSeats = document.getElementById('selectSeats');
    $('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > selectSeats.value ) {
        $(this).prop('checked', false);
        alert("not valid");
    }
});


$('.calculate').change(function(){
    var group = parseInt($('.selectpicker.selectClass').val());
    var price = parseInt($('.selectpicker.selectSeats').val());
    var total = group * price;
    if(isNaN(total)){
  $('#totalAmount').val('');
} else{
  $('#totalAmount').val('Rs' + total+ "/-");
}
});
};
