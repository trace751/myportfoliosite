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