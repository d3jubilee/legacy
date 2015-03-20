
/*

Responsive Mobile Menu v1.0
Plugin URI: responsivemobilemenu.com

Author: Sergio Vitov
Author URI: http://xmacros.com

License: CC BY 3.0 http://creativecommons.org/licenses/by/3.0/

*/

function responsiveMenu() { 
    $('.navbar').each(function() {
      $(this).children('ul').addClass('navbar-main-list');  // mark main menu list
      var $style = $(this).attr('data-menu-style'); // get menu style
        if ( typeof $style == 'undefined' ||  $style == false )
          {
            $(this).addClass('d3'); // set d3 style if style is not defined
          }
        else {
            $(this).addClass($style);
          }
          
          
      /*  width of menu list (non-toggled) */
      
      var $width = 0;
        $(this).find('ul li').each(function() {
          $width += $(this).outerWidth();
        });
        
      // if modern browser
      
      if ($.support.leadingWhitespace) {
        $(this).css('max-width' , $width*1.55+'px');
      }
      // 
      else {
        $(this).css('width' , $width*1.55+'px');
      }
    
    });
}
function getMobileMenu() {

  /*  build toggled dropdown menu list */
  
  $('.navbar').each(function() {  
        var menutitle = $(this).attr("data-menu-title");
        if ( menutitle == "" ) {
          menutitle = "Menu";
        }
        else if ( menutitle == undefined ) {
          menutitle = "Menu";
        }
        var $menulist = $(this).children('.navbar-main-list').html();
        var $menucontrols ="<div class='navbar-toggled-controls'><div class='navbar-toggled-title'>" + menutitle + "</div><div class='d3-menu nav-button'></div></div>";
        $(this).prepend("<div class='navbar-toggled navbar-closed'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");
// <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
    });
}

function adaptMenu() {
  
  /*  toggle menu on resize */
  
  $('.navbar').each(function() {
      var $width = $(this).css('max-width');
      $width = $width.replace('px', ''); 
      if ( $(this).parent().width() < $width*1.05 ) {
        $(this).children('.navbar-main-list').hide(0);
        $(this).children('.navbar-toggled').show(0);
      }
      else {
        $(this).children('.navbar-main-list').show(0);
        $(this).children('.navbar-toggled').hide(0);
      }
    });

}

$(function() {

   responsiveMenu();
   getMobileMenu();
   adaptMenu();
   
   /* slide down mobile menu on click */
   
   $('.navbar-toggled, .navbar-toggled .navbar-button').click(function(){
    if ( $(this).is(".navbar-closed")) {
       $(this).find('ul').stop().show(300);
       $(this).removeClass("navbar-closed");
    }
    else {
      $(this).find('ul').stop().hide(300);
       $(this).addClass("navbar-closed");
    }
    
  }); 

});
  /*  hide mobile menu on resize */
$(window).resize(function() {
  adaptMenu();
});
