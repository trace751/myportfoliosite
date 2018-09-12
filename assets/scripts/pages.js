$(document).ready(function(){

window.sr = ScrollReveal();
		sr.reveal('.main-about', {
			duration: 1000,
			origin: 'right',
			distance: '200px',
			});

		sr.reveal('.main-project', {
			duration: 1000,
			origin: 'right',
			distance: '200px',
			});


		sr.reveal('.main-contact', {
			duration: 1000,
			origin: 'right',
			distance: '200px',
			});

		sr.reveal('.main-about .left-section', {
			duration: 2000,
			origin: 'left',
			distance: '100px',
			delay: 500
			});

		sr.reveal('.main-about .right-section', {
			duration: 2000,
			origin: 'left',
			distance: '100px',
			delay: 800
			});
});