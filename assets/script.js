$(document).ready(function(){

//Animate letter spacing name
$('#hidden-content h1').hide().fadeIn(800).animate({'letter-spacing': '15px'}, 2000);
//Fade in the subtitle
$('#hidden-content span').hide().delay(2200).fadeIn(800);
//Fade out the intro page
$('#hidden-body').delay(4000).fadeOut(500);

});