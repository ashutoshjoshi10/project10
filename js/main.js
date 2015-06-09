$(document).ready(function(){
  $('.dropdown-button').dropdown({
     // inDuration: 300,
     // outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }
  );
     
 $('.slider').slider({full_width: true,height:600});	
 $('.parallax').parallax();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  
  $('select').material_select();
	
})