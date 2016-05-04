$(document).ready(function () {
  $('#myonoffswitch').click(function () {
    if($('#myonoffswitch:checkbox:checked').length > 0) {
      $('#weight').attr('placeholder', 'Weight (LB)')
      $('#height').attr('placeholder', 'Height (IN)')
    }
    else {
      $('#weight').attr('placeholder', 'Weight (KG)')
      $('#height').attr('placeholder', 'Height (CM)')
    }
  });
});
