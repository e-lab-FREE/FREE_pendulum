$(document).ready(function(){
	  

	  var currentDate = new Date()
	  var seconds = currentDate.getSeconds();
      var minutes = currentDate.getMinutes();
      var hour = currentDate.getHours();
      var day = currentDate.getDate()
      var month = currentDate.getMonth() + 1  // starts from zero
      var year = currentDate.getFullYear()

     var d = day + "-" + month + "-" + year  + "  " + hour + "_" + minutes + "_" + seconds;


		// - MESSAGES
		$('.message .close').on('click', function() {
		    $(this)
		      .closest('.message')
		      .transition('fade')
		    ;
		});
		// - DATATABLES
	    $(document).ready(function(){
		    $('#table_result_1').DataTable();
		});
		var table = $('#table_result_1').DataTable({
	        lengthChange: false,
	        buttons: [ 'copy',
			{
                extend: 'csv',
                title: 'Pendulum_results__' + d  
            },
			{
                extend: 'excel',
                title: 'Pendulum_results__' +d
            },
			
			]
	    });
	    table.buttons().container().appendTo(
	    	$('div.eight.column:eq(0)', table.table().container())
	    );
	});



$(document).ready(function(){
  var wheight= $(window).height();
  var contentheight=$(".content").height();
  if(wheight>contentheight){
    $("footer").addClass("fixedfooter");
  }
  else{
     $("footer").removeClass("fixedfooter");
}
})