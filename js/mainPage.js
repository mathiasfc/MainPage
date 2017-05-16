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
    //'Sou facinado por novas tecnologias',
    //'Estou sempre em busca de conhecimento',
    //'Sou um ávido admirador das linguagens de programação'
  ],
}

$(document).ready(function(){
	$("#hdLanguage").val(userLang);
	setLanguage($("#hdLanguage").val());
	
	$('.welcomeMsgs').typed({
  strings: strings.msgs,
  typeSpeed: 90,
  backDelay: 1800,
  callback: function () {
    $('.typed-cursor').fadeOut()
  }
});	
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

//remoteSVG('svg.menu-icon', 'menu-icon', function () {
//  $('.menu-icon').on('click', function () {
//    console.log('click')
//    $('.shadow').fadeIn()
//    $('.vertical-menu').addClass('animated slideInLeft')
//  })
//})
//remoteSVG('svg.menu-close', 'menu-close')

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
		
	}else if(userLang == "en-US"){
		
	}else{
		
	}
	
}

var ptBr, enUS;
ptBr = {
    "name":"John",
    "age": "1",
	"test": "2",
    //"cars":[ "Ford", "BMW", "Fiat" ]
};

enUS = {
    "name":"John",
    "age": "1",
	"test": "2",
};
