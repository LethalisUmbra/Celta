$(document).ready(function(){
	// función que define al carrusel y sus características
	$('.carousel').carousel({
		duration   : 100,
		indicators : true,
		numVisible : 1
	});

	// función para el auto-scroll del carrusel
	setInterval(function(){
	$('.carousel').carousel('next')
	}, 10000); // cantidad de milisegundos para que se cambie de item

});