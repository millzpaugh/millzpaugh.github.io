// Menu functions 

$(menuCommands());


function menuCommands(){
  $('#home-button').on("click", function(){
   $('#projects').hide(); 
   $('#skills').hide();
   $('#about').addClass('animated fadeInDown').show()
 }); 

  $('#projects-button').on("click", function(){
   $('#skills').hide(); 
   $('#about').hide(); 
   $('#projects').addClass('animated fadeInDown').show(); 
 });

  $('#skills-button').on("click", function(){
   $('#projects').hide(); 
   $('#about').hide(); 
   $('#skills').addClass('animated fadeInDown').show()
 }); 

}



