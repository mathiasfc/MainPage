var userLang = navigator.language || navigator.userLanguage; 

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
}

var strings = {
  msgs: [
    //'Seja bem-vindo',
    //'Sou fascinado por novas tecnologias',
    //'Estou sempre em busca de conhecimento',
    //'Sou um ávido admirador das linguagens de programação'
  ],
}

function setPositionCircle(userLang){
	if(userLang == "pt-BR"){
		$("#circleToggle").css("left","32px");
	}else if(userLang == "en-US"){
		$("#circleToggle").css("left","4px");
	}
}

$(document).ready(function(){
	var userLanguagePreference = getCookie("lang");
	$("#hdLanguage").val(userLang);
	if(userLanguagePreference){
		setLanguage(userLanguagePreference);
		setPositionCircle(userLanguagePreference);
	}else{
		setLanguage($("#hdLanguage").val());
		setPositionCircle($("#hdLanguage").val());
	}
	
	
	$('.welcomeMsgs').typed({
  strings: strings.msgs,
  typeSpeed: 90,
  backDelay: 1800,
  callback: function () {
    $('.typed-cursor').fadeOut()
  }
});

//HAILJACK SCROLL
/*var currentSection = $('#welcome');
$(window).on('wheel', function(e) {
  var delta = e.originalEvent.deltaY;
  if (delta > 0 && currentSection.next().length > 0) {
    currentSection = currentSection.next();
    scrollTo(currentSection);
  } else if (delta < 0 && currentSection.prev().length > 0) {
    currentSection = currentSection.prev();
    scrollTo(currentSection);
  }

  function scrollTo(el) {
    realoffSet = el.offset().top;
    $("html, body").animate({
      scrollTop: realoffSet
    }, 500);
  }
});	*/
//END HAILJACK

$("input[id*='switch-']").click(function(){
	if($("#circleToggle").position().left == 32){
		$("#circleToggle").css("left","4px");
		$("#ptBR").css("color","#31ff4c");
		$("#enUS").css("color","white");
		ChangeUserLanguage(false);
	}else if($("#circleToggle").position().left == 4){
		$("#circleToggle").css("left","32px");
		$("#ptBR").css("color","white");
		$("#enUS").css("color","#31ff4c");
		ChangeUserLanguage(true);
	}
	
	setTimeout(function(){ 
	if($("#circleToggle").position().left == 32){
		$("#ptBR").css("color","#31ff4c");
		$("#enUS").css("color","white");
	}else if($("#circleToggle").position().left == 4){
		$("#ptBR").css("color","white");
		$("#enUS").css("color","#31ff4c");
	}
	}, 300);
});

});


$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});

$(window).scroll(function () {
  var $w = $('#welcome')
  var $d = $(document)
  if ($w.height() - $d.scrollTop() <= 50) {
    $('header').css('background-color', '#020405')
    if (isMobile.any()) {
      $('.brand').css('marginLeft', '45px')
      $('.menu-icon').fadeIn(550)
      $('.brand').fadeIn(550)
    }
  } else {
    $('header').css('background-color', 'transparent')
    $('.active').css('background-color', 'transparent')
    if (isMobile.any()) {
      $('.menu-icon').fadeOut(550)
      $('.brand').fadeOut(550)
    }
  }
})

function remoteSVG (selector, c, onload) {
  var $mi = $(selector)
  var getUrl = $mi.data('src')
  $.get(getUrl, function (data) {
    data = (new XMLSerializer()).serializeToString(data)
    var $s = $(data)
    $s.attr('class', c)
    if (/close\.svg/.test(getUrl)) {
      $s.attr('width', '47')
      $s.attr('height', '47')
    }
    onload()
    $mi.replaceWith($s)
  })
}

var skills = {
  frontend: [
    'jQuery',
    'AngularJS',
    'HTML5',
    'CSS3',
    'JS',
    'Riot.JS',
    'ES2015',
    'WebRTC',
    'A-Frame',
    'AJAX',
    'SVG',
    'Jade',
    'SCSS',
    'Bootstrap',
    'JWT',
    'SocketIO',
    'Materialize.css',
    'Material Design Lite',
    'RegExp'
  ],
  backend: [
    'NodeJS',
    'MongoDB',
    'Mongoose',
    'Express.js',
    'MEAN Stack',
    'PHP',
    'MySQL',
    'REST API',
    'Meteor',
    'SocketIO',
    'Ruby',
    'Python',
    'Electron',
    'Mocha',
    'Unit Tests',
    'Passport',
    'Browserify',
    'BabelJS',
    'Mustache Templating',
    'BitcoinJS'
  ],
  mobile: [
    'Swift',
    'iOS',
    'Ionic',
    'Apache Cordova',
    'PhoneGap',
    'APNs',
    'GCM',
    'iOS Facebook Login',
    'Google Analytics',
    'Fabric.io',
    'CFNetworking',
    'Alamofire',
    'JBChartView',
    'CoreMotion',
    'Firebase'
  ]
}

Object.keys(skills).forEach(function (key) {
  skills[key].forEach(function (s) {
    $('.' + key).append('<li class="skill-item">' + s + '</li>')
  })
})

remoteSVG('svg.menu-icon', 'menu-icon', function () {
  $('.menu-icon').on('click', function () {
    console.log('click')
    $('.shadow').fadeIn()
    $('.vertical-menu').addClass('animated slideInLeft')
  })
})
remoteSVG('svg.menu-close', 'menu-close')

$('a[href*=#]').on('click', function(event) {
  $('.active').removeClass('active')
  $(this).parent().addClass('active')
  var href = $(this).attr("href")
  if ( /(#.*)/.test(href) ) {
    var hash = href.match(/(#.*)/)[0]
    var path = href.match(/([^#]*)/)[0]
    if (window.location.pathname == path || path.length == 0) {
      event.preventDefault()
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1500, $.easie(0.47,0.22,0,1))
    }
  }
})


function setLanguage(userLang){
	if(userLang == "pt-BR"){
		strings.msgs[0] = "Seja bem-vindo";
		strings.msgs[1] = "Sinta-se à vontade para me contatar";
		$(".spanSobre").text("Sobre");
		$(".spanSkills").text("Skills");
		$(".spanContato").text("Contato");
		document.getElementById("spanOla").innerHTML = "Olá";
		var text = "Meu nome é Mathias Falci de Castro, sou estudante e tenho 23 anos, comecei a estudar ciência da computação há quatro anos na PUCRS, o que me levou a escolher "+ 
		"esse curso foi o fascínio pelas ferramentas de automação, principalmente em games. Meu primeiro contato com a programção foi através de script's escritos em <a href='https://www.lua.org/portugues.html'>LUA</a> há muito tempo.<br>"+
		"Desde então me interessei cada vez mais sobre o assunto, me tornei um entusiasta das linguagens e seus potenciais, e hoje a programação faz parte da minha rotina de trabalho e estudo. No final de 2015 comecei a trabalhar na <a href='http://www.absis.com.br/paginas/default.aspx'>Absis</a>,<br>"+
		"desenvolvendo softwares e páginas web, durante este período que descobri meu encanto por linguagens como C# e JavaScript. No meu <del>tempo livre</del> gosto de me aprofundar em linguagens que me chamam atenção como Python e "+
		"me aventurar \"fuçando\" framework's e plugin's javascript. Também tento participar sempre que possível do <a href='https://pt.stackoverflow.com/'>StackOverflow</a> visando ampliar meu conhecimento nas mais diversas áreas da programação.";
		document.getElementById("spanDescription").innerHTML = text;
	}else if(userLang == "en-US"){
		strings.msgs[0] = "Welcome";
		strings.msgs[1] = "Feel free to contact me";
		$(".spanSobre").text("About");
		$(".spanSkills").text("Skills");
		$(".spanContato").text("Contact");
		document.getElementById("spanOla").innerHTML = "Hello";
		var text = "My name is Mathias Falci de Castro, I am 23 year old student. I started studying computer science four years ago in PUCRS (Pontifícia Universade Católica do Rio Grande do Sul), What made me choose "+ 
		"this course was the fascination for automation tools, especially in games. My first contact with programming was through scripts written in <a href='https://www.lua.org/portugues.html'>LUA</a> a long time ago.<br>"+
		"Since then I have become more interested in the subject, I became an enthusiast of languages and their potential, and today programming is part of my work routine and study. In the end of 2015 I started working on <a href='http://www.absis.com.br/paginas/default.aspx'>Absis</a>,<br>"+
		"developing softwares and web pages, during this time I discovered my charm for languages like C# and JavaScript. In my <del>free time</del> I like to study languages that call me attention like Python and "+
		"explore framework's and plugin's javascript. I also try to participate whenever possible in the <a href='https://pt.stackoverflow.com/'>StackOverflow</a> looking for knowledge in the most diverse areas of programming."
		document.getElementById("spanDescription").innerHTML = text;
	}
	
}

function ChangeUserLanguage(br){
	if(br){
		setCookie("lang","pt-BR");
		setLanguage("pt-BR");
	}else{
		setCookie("lang","en-US");
		setLanguage("en-US");
	}
	
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}







