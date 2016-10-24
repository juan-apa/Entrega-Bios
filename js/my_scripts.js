

$(document).on('ready',function() {

	pull = $('a.pull');
	links = $('header nav ul li a');
	menu = $('header nav ul');
	padreOurShop = $('.cinco article');
	divOurShop = $('.cinco article div');
	botonMenu = $('header .center .open_menu');
	abrirMenu = $('header .center .open_menu .fa-bars');
	cerrarMenu = $('header .center .open_menu .fa-times');


	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	setearTamanioMenu();
	$(botonMenu).on('click', function(e){
		e.preventDefault();
		abrirCerrarMenu();
	});
	abrirCerrarMenu();
	ancho();
	function ancho(){
		var anchoPantalla1 = $(window).width();
		anchoMenorA(anchoPantalla1);
		$(window).resize(function(){
			var anchoPantalla1 = $(window).width();
			anchoMenorA(anchoPantalla1);
		})
	}

	function anchoMenorA(anchoPantalla1){
		if(anchoPantalla1 <= 480){
			$(menu).addClass('menuMobile');
			$(links).on('click', function(){
				if($(menu).hasClass('menuMobile')){
					$(menu).slideUp();
				}
			});
		}else {
			$(menu).removeClass('menuMobile');
		}
	}

	onepageCurrentItem();
	function onepageCurrentItem(){
		$(links).on('click', function(){
			var linkActual = $(this);
			(links).removeClass('current-item');
			$(linkActual).toggleClass('current-item');
		});
	};




});

function centrarOurShop(){
	var altoPadre = padreOurShop.height();
	var anchoPadre = padreOurShop.width();
	var altoOurShop = divOurShop.height();
	var anchoOurShop = divOurShop.width();

	var margenesEjeY = (altoPadre - altoOurShop) / 2;
	var margenesEjeX = (anchoPadre - anchoOurShop) / 2;

	divOurShop.css('margin-left', margenesEjeX)

	console.log('Alto padre: ' + altoPadre + ' altoOurShop: ' + altoOurShop + ' MargenesY: ' + margenesEjeY);
}

function abrirCerrarMenu(){
	console.log('entro');
	if(menu.hasClass('displayNone')){
		if(abrirMenu.hasClass('displayNone'))
			abrirMenu.removeClass('displayNone');

		if(cerrarMenu.hasClass('displayBlock'))
			cerrarMenu.removeClass('displayBlock');

		abrirMenu.addClass('displayBlock');
		cerrarMenu.addClass('displayNone');
		menu.removeClass('displayNone');
		menu.addClass('displayBlock');

	}
	else{
		if(abrirMenu.hasClass('displayBlock'))
			abrirMenu.removeClass('displayBlock');
		if(cerrarMenu.hasClass('displayNone'));
			cerrarMenu.removeClass('displayNone');

		abrirMenu.addClass('displayNone');
		cerrarMenu.addClass('displayBlock');
		menu.removeClass('displayBlock');
		menu.addClass('displayNone');
	}
}

function altoPantalla(){
	var altoPantalla = $(window).height();
	return altoPantalla;
}

function setearTamanioMenu(){
	$('nav ul').css('height', altoPantalla()+'px');
}

$(window).resize(function(){
	setearTamanioMenu();
	var anchoPantalla = $(window).width();
	/* si ancho de la pantalla es mayor a 480px
	y el men� normal est� oculto lo mostramos */
	if(anchoPantalla > 480 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}
	centrarOurShop();
});
