$(document).on('ready',function() {
	/*Elementos a interactuar*/
	pull = $('a.pull');
	links = $('header nav ul li a');
	menu = $('header nav ul');
	padreOurShop = $('.cinco article');
	divOurShop = $('.cinco article div');
	botonMenu = $('header .center .open_menu');
	abrirMenu = $('header .center .open_menu .fa-bars');
	cerrarMenu = $('header .center .open_menu .fa-times');
	buttonSeccUno = $('.uno article #flecha_uno');
	buttonSeccDos = $('.dos article #flecha_dos');
	buttonSeccCuatro = $('.cuatro article #flecha_cuatro');
	buttonSeccSeis = $('.seis article #flecha_seis');
	videoControls = $('.seis article #controlButtons');
	botonPlay = $('#boton_play');
	botonPausa = $('#boton_pause');

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	setearTamanioMenu();
	$(botonMenu).on('click', function(e){
		e.preventDefault();
		abrirCerrarMenu();
	});
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

	/*BX - Slider*/
	$('.tweets-slider').bxSlider({
    infiniteLoop:true,
    auto:true,
    controls:false,
		slideWidth:719
  });

  /*Click en los botones / a */
	buttonSeccUno.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $("#dos").offset().top
    }, 1000);
	});
	buttonSeccDos.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $("#tres").offset().top
    }, 1000);
	});
	buttonSeccCuatro.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $("#cinco").offset().top
    }, 1000);
	});
	buttonSeccSeis.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $("#siete").offset().top
    }, 1000);
	});
	botonPlay.on('click', function(e){
		e.preventDefault();
		/*@Fixme: have to add video controls so that when i hit play, the play
		          button hides, and the pause button appears*/
		botonPlay.toggleClass('displayNone');
		botonPausa.toggleClass('displayNone');
	});
	botonPausa.on('click', function(e){
		e.preventDefault();
		/*@Fixme: have to add video controls so that when i hit play, the play
		          button hides, and the pause button appears*/
		botonPlay.toggleClass('displayNone');
		botonPausa.toggleClass('displayNone');
	});

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
	abrirMenu.toggleClass('displayNone');
	cerrarMenu.toggleClass('displayNone');
	menu.toggleClass('displayNone');
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
