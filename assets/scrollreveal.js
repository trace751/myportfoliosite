$(document).ready(function(){
	
	//On Scoll Animations
window.sr = ScrollReveal();
		sr.reveal('.left-nav', {
			duration: 2000,
			origin: 'left',
			distance: '200px',
			delay: 4000
			});

		sr.reveal('.main-text', {
			duration: 2000,
			origin: 'top',
			distance: '100px',
			delay: 5000
			});
	});

//Triggers the about me page
let about = document.querySelector('.aboutme');
about.addEventListener('click', function(e){
	e.preventDefault();
			sr.reveal('#about', {
	duration: 2000,
	origin: 'left',
	distance: '100px',
	});
});

//Triggers the contact page
let contact = document.querySelector('.contact');
contact.addEventListener('click', function(e){
	e.preventDefault();
			sr.reveal('#contact', {
	duration: 2000,
	origin: 'top',
	distance: '100px',
	});
});