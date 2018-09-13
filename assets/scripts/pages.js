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

		// Contact Page

		sr.reveal('.contact-left', {
			duration: 2000,
			origin: 'left',
			distance: '100px',
			delay: 800
			});

		sr.reveal('.contact-left ul li:nth-child(1)', {
			duration: 2000,
			origin: 'bottom',
			distance: '50px',
			delay: 1400
			});

		sr.reveal('.contact-left ul li:nth-child(2)', {
			duration: 2000,
			origin: 'bottom',
			distance: '50px',
			delay: 1800
			});

		sr.reveal('.contact-left ul li:nth-child(3)', {
			duration: 2000,
			origin: 'bottom',
			distance: '50px',
			delay: 2200
			});
});