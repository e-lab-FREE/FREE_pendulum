
/* To have a tab visible on page load, add the class active to both the initializing menu and the tab.
Please see semantic ui webpage*/

// tab
$('.menu .item').tab();  

console.log('Tab List : ', exp_parameters);
function disableButton(){
            //$("#startButton").toggleClass("disabled");
            $("#startButton").addClass("disabled");

}


if (exp_parameters.length > 0) {
 // Initial displacement


$('#'+exp_parameters[0].nome).change(function() {
  $("#range-"+exp_parameters[0].nome).range('set value', $(this).val())
});


 $('#range-'+exp_parameters[0].nome).range({
     min: parseInt (exp_parameters[0].min_val),
     max: parseInt (exp_parameters[0].max_val),
     step: parseInt (exp_parameters[0].step),
     start: parseInt (exp_parameters[0].start),
     input: '#'+exp_parameters[0].nome,
     onChange: function(value, meta) {
		if(meta.triggeredByUser) {
			$("#startButton").addClass("disabled");
      }
      var n = value
      if (n%exp_parameters[0].step != 0){
        helper = String(exp_parameters[0].step).split('.')
        console.log(helper)
        if (helper.length > 1){
          $('#'+exp_parameters[0].nome).val(Number(n).toFixed(helper[1].length))
        }
        else {
          $('#'+exp_parameters[0].nome).val(Number(n).toFixed(0))
        }
      }
      if (n < parseInt (exp_parameters[0].min_val)){
        $('#'+exp_parameters[0].nome).val(parseInt (exp_parameters[0].min_val));
        $("#range-"+exp_parameters[0].nome).range('set value', parseInt (exp_parameters[0].min_val))
      }
      if (n > parseInt (exp_parameters[0].max_val)){
        $('#'+exp_parameters[0].nome).val(parseInt (exp_parameters[0].max_val));
        $("#range-"+exp_parameters[0].nome).range('set value', parseInt (exp_parameters[0].max_val))
      }

		
     } });
// $('#deltaX').change(function() {
// $("#range1").range('set value', $(this).val())
// });
}


if (exp_parameters.length > 1) {
 // Number of samples
 $('#'+exp_parameters[1].nome).change(function() {
  $("#range-"+exp_parameters[1].nome).range('set value', $(this).val())
});


 $('#range-'+exp_parameters[1].nome).range({
     min: parseInt (exp_parameters[1].min_val),
     max: parseInt (exp_parameters[1].max_val),
     step: parseInt (exp_parameters[1].step),
     start: parseInt (exp_parameters[1].start),
     input: '#'+exp_parameters[1].nome,
     onChange: function(value, meta) {
		if(meta.triggeredByUser) {
			$("#startButton").addClass("disabled");
      }
      var n = value
      if (n%exp_parameters[1].step != 0){
        helper = String(exp_parameters[1].step).split('.')
        console.log(helper)
        if (helper.length > 1){
          $('#'+exp_parameters[1].nome).val(Number(n).toFixed(helper[1].length))
        }
        else {
          $('#'+exp_parameters[1].nome).val(Number(n).toFixed(0))
        }
      }
      if (n < parseInt (exp_parameters[1].min_val)){
        $('#'+exp_parameters[1].nome).val(parseInt (exp_parameters[1].min_val));
        $("#range-"+exp_parameters[1].nome).range('set value', parseInt (exp_parameters[1].min_val))
      }
      if (n > parseInt (exp_parameters[1].max_val)){
        $('#'+exp_parameters[1].nome).val(parseInt (exp_parameters[1].max_val));
        $("#range-"+exp_parameters[1].nome).range('set value', parseInt (exp_parameters[1].max_val))
      }

		
     } });
}

// Initial displacement
//  $('#range1').range({
//     min: 0,
//     max: 20,
//     start: 1,
//     input: '#DeltaX'
//   });

// Number of samples
//  $('#range2').range({
//     min: 0,
//     max: 400,
//     start: 33,
//     input: '#Samples'
//   });



 $(document).ready(function(){
   $('.url.video .ui.embed').embed();

});

// $('#deltaX').change(function() {
//   $("#range1").range('set value', $(this).val())
// });

// $( document ).ready(function() {
//   $('#deltaX').change(function() {
//     var n = $('#deltaX').val();
//     if (n%exp_parameters[0].step != 0){
//       helper = String(exp_parameters[0].step).split('.')
//       console.log(helper)
//       if (helper.length > 1)
//         $('#deltaX').val(Number(n).toFixed(helper[1].length))
//       else {
//         $('#deltaX').val(Number(n).toFixed(0))
//       }
//     }
//     if (n < parseInt (exp_parameters[0].min_val))
//       $('#deltaX').val(parseInt (exp_parameters[0].min_val));
//     if (n > parseInt (exp_parameters[0].max_val))
//       $('#deltaX').val(parseInt (exp_parameters[0].max_val));
//   });
// });





$('#samples').change(function() {
  $("#range2").range('set value', $(this).val())
});
$( document ).ready(function() {
  $('#samples').change(function() {
    var n = $('#samples').val();
    if (n%exp_parameters[1].step != 0){
      helper = String(exp_parameters[1].step).split('.')
      console.log(helper)
      if (helper.length > 1)
        $('#samples').val(Number(n).toFixed(helper[1].length))
      else {
        $('#samples').val(Number(n).toFixed(0))
      }
    }
    if (n < parseInt (exp_parameters[1].min_val))
      $('#samples').val(parseInt (exp_parameters[1].min_val));
    if (n > parseInt (exp_parameters[1].max_val))
      $('#samples').val(parseInt (exp_parameters[1].max_val));
  });
});





