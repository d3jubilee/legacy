

$(function() {
      $('.carousel').jcarousel({
      });
    });

$(document).ready(function(){

    $('#d3value').click(function(){
      $('.vision-hide').toggleClass( "hidden");
      $('#value').toggleClass("hidden");
       $('#value2').toggleClass("hidden");

       $(this).text(function(i, v){
               return v === 'Back' ? 'More Value' : 'Back'
            });
    });

    $('#intro_btn').click(function(){
      $('#d3intro').toggleClass( "hidden");
      $(this).text(function(i, v){
               return v === '-' ? '+' : '-'
            });
  });

     $('#address_btn').click(function(){
      $('#address').toggleClass( "hidden");
     
  });



  });


/* Tab js **/

      $(document).ready(function() {
      $('.one').click(function() {
      $('a.switch').removeClass("activeTa");
      $(this).addClass("activeTa");
      $("#one").show();
      $("#two").hide();
      $("#three").hide();
  $("#four").hide();
  });
  
$('.two').click(function() {
      $('a.switch').removeClass("activeTa");
      $(this).addClass("activeTa");
      $("#one").hide();
      $("#two").show()
      $("#three").hide();
    $("#four").hide();
  });
  
$('.three').click(function() {
      $('a.switch').removeClass("activeTa");
      $(this).addClass("activeTa");
      $("#one").hide();
      $("#two").hide();
      $("#three").show();
      $("#four").hide();
  
  });
$('.four').click(function() {
      $('a.switch').removeClass("activeTa");
      $(this).addClass("activeTa");
      $("#one").hide();
      $("#two").hide();
      $("#three").hide();
      $("#four").show();
  
  });

    });













