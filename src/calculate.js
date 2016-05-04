$(document).ready(function () {
  $('#calculate').click(function () {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var person = new Person({weight: w, height: h});
    if($('#myonoffswitch:checkbox:checked').length > 0) {
      person.calculate_imperial_bmi();
    }
    else {
      person.calculate_metric_bmi();
    }

    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and your status is '+ person.bmiMessage);
  });
});
