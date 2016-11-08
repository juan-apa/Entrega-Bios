$(document).on('ready',function() {
	/*Elementos a interactuar*/
	pull = $('a.pull');
	links = $('header nav ul li a');
	linkUNO = $('#UNO_Link');
	linkDOS = $('#DOS_Link');
	linkTRES = $('#TRES_Link');
	linkCUATRO = $('#CUATRO_Link');
	linkCINCO = $('#CINCO_Link');
	linkSEIS = $('#SEIS_Link');
	linkSIETE = $('#SIETE_Link');
	linkOCHO = $('#OCHO_Link');
	menu = $('header nav ul');
	navBar = $('header nav');
	menuItems = $('header nav ul li');
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
	seccBotonesPP = $('.boton_play');
	botonPlay = $('#boton_play');
	botonPausa = $('#boton_pause');
	divFlecha_comienzo = $('.flecha_comienzo');
	flecha_comienzo = $('.flecha_comienzo a');
	seccionUno = $('#uno');
	seccionDos = $('#dos');
	video = $('video');

	VerticalScroll();
	tamanioSeccTres();

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
	$('#slider3').bxSlider({
		infiniteLoop:true,
    auto:true,
    controls:false,
		minSlides: 3,
    maxSlides: 5,
		slideWidth:719
	});

	/*Funciones para moverse por las secciones*/
	function goto_UNO(){
		$('html, body').animate({
        scrollTop: $("#uno").offset().top
    }, 1000);
	}
	function goto_DOS(){
		$('html, body').animate({
				scrollTop: $("#dos").offset().top
		}, 1000);
	}
	function goto_TRES(){
		$('html, body').animate({
        scrollTop: $("#tres").offset().top
    }, 1000);
	}
	function goto_CUATRO(){
		$('html, body').animate({
        scrollTop: $("#cuatro").offset().top
    }, 1000);
	}
	function goto_CINCO(){
		$('html, body').animate({
        scrollTop: $("#cinco").offset().top
    }, 1000);
	}
	function goto_SEIS(){
		$('html, body').animate({
        scrollTop: $("#seis").offset().top
    }, 1000);
	}
	function goto_SIETE(){
		$('html, body').animate({
        scrollTop: $("#siete").offset().top
    }, 1000);
	}
	function goto_OCHO(){
		$('html, body').animate({
        scrollTop: $("#ocho").offset().top
    }, 1000);
	}

  /*Click en los botones / a */
	buttonSeccUno.on('click', function(e){
		e.preventDefault();
		goto_DOS();
	});
	buttonSeccDos.on('click', function(e){
		e.preventDefault();
		goto_TRES();
	});
	buttonSeccCuatro.on('click', function(e){
		e.preventDefault();
		goto_CINCO();
	});
	buttonSeccSeis.on('click', function(e){
		e.preventDefault();
		goto_SIETE();
	});
	flecha_comienzo.on('click', function(e){
		e.preventDefault();
		goto_UNO();
	});

	/*Secciones del menu*/
	linkUNO.on('click', function(e){
		e.preventDefault();
		goto_UNO();
		abrirCerrarMenu();
	});
	linkDOS.on('click', function(e){
		e.preventDefault();
		goto_DOS();
		abrirCerrarMenu();
	});
	linkTRES.on('click', function(e){
		e.preventDefault();
		goto_TRES();
		abrirCerrarMenu();
	});
	linkCUATRO.on('click', function(e){
		e.preventDefault();
		goto_CUATRO();
		abrirCerrarMenu();
	});
	linkCINCO.on('click', function(e){
		e.preventDefault();
		goto_CINCO();
		abrirCerrarMenu();
	});
	linkSEIS.on('click', function(e){
		e.preventDefault();
		goto_SEIS();
		abrirCerrarMenu();
	});
	linkSIETE.on('click', function(e){
		e.preventDefault();
		goto_SIETE();
		abrirCerrarMenu();
	});
	linkOCHO.on('click', function(e){
		e.preventDefault();
		goto_OCHO();
		abrirCerrarMenu();
	});

	/*Controles del video*/
	function pausar_continuarVideo(){
		var elem = $(video).get(0);
		if(elem.paused){
			elem.play();
		}
		else{
			elem.pause();
		}
	}
	/*
	botonPlay.on('click', function(e){
		e.preventDefault();
		botonPlay.toggleClass('displayNone');
		botonPausa.toggleClass('displayNone');
		botonPausa.fadeOut("slow");
		pausar_continuarVideo();
	});

	botonPausa.on('click', function(e){
		e.preventDefault();
		/*@Fixme: have to add video controls so that when i hit play, the play
		          button hides, and the pause button appears*/
/*
		botonPlay.toggleClass('displayNone');
		botonPausa.toggleClass('displayNone');
		pausar_continuarVideo();
	});*/
	seccBotonesPP.on('click', function(e){
		var vid = $(video).get(0);
		botonPlay.toggleClass('displayNone');
		botonPausa.toggleClass('displayNone');
		console.log('entro');
		pausar_continuarVideo();
		if(! vid.paused){
			botonPausa.fadeOut("slow");
		}
		else{
		}
		/*
		if(botonPlay.hasClass('displayNone')){
			pausar_continuarVideo();

			console.log('entro');
		}*/

		e.preventDefault();


	})
});

function tamanioSeccTres(){
	var altoVideo = video.height();
	$('.tres').css('height', altoVideo+'px');
}

function centrarOurShop(){
	var altoPadre = padreOurShop.height();
	var anchoPadre = padreOurShop.width();
	var altoOurShop = divOurShop.height();
	var anchoOurShop = divOurShop.width();

	var margenesEjeY = (altoPadre - altoOurShop) / 2;
	var margenesEjeX = (anchoPadre - anchoOurShop) / 2;

	divOurShop.css('margin-left', margenesEjeX)
}
function abrirCerrarMenu(){
	abrirMenu.toggleClass('displayNone');
	cerrarMenu.toggleClass('displayNone');
	menu.toggleClass('desplegar');
	navBar.toggleClass('desplegar');
	/*links.toggleClass('displayNone');*/
	moverBotonMenu();
}
function moverBotonMenu(){
	if(($(window).width() <= 480)){
		botonMenu.toggleClass('moverBoton');
	}
}
function ajustarBotonMenu(){
	if($(window).width() <= 482){
		if(navBar.hasClass('desplegar')){
			botonMenu.addClass('moverBoton');
			console.log('asdasdasd');
		}
		else{
			botonMenu.removeClass('moverBoton');
		}
	}
	else{
		botonMenu.removeClass('moverBoton');
	}



}
function centrarItemsMenu(){
	/*Los li son menuItems*/
	/*Los a dentro de los li son links*/
	var altoLi = parseFloat(menuItems.css('height'))
	links.css('height',  altoLi);
	var altoTextoA = parseFloat(links.css('font-size'));
	var altoA = parseFloat(links.css('height'));
	var paddingsASetear = ((altoA-altoTextoA)/2);
	links.css('padding-top', paddingsASetear);
	links.css('padding-bottom', paddingsASetear);
}
function altoPantalla(){
	var altoPantalla = $(window).height();
	return altoPantalla;
}
function setearTamanioMenu(){
	//$('nav ul').css('height', altoPantalla()+'px');
	/*if($('nav ul').hasClass('desplegar')){
		$('nav').css('width', (85 + '%'));
	}*/
	centrarItemsMenu();
}
function VerticalScroll() {
	 var toTopPos = seccionDos.offset().top;
	 $(window).on('scroll', function () {
			 var tScroll = $(window).scrollTop();
			 if(tScroll >= toTopPos - 300){
				 divFlecha_comienzo.show();
			 }else{
				 divFlecha_comienzo.hide();
			 }
	 });
}

$(window).resize(function(){
	setearTamanioMenu();
	ajustarBotonMenu();
	var anchoPantalla = $(window).width();
	/* si ancho de la pantalla es mayor a 480px
	y el men� normal est� oculto lo mostramos */
	if(anchoPantalla > 480 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}
	centrarOurShop();
	tamanioSeccTres();
});
