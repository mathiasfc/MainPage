var filled = false;

var skillsCardsName = {
  init: function(){
      // restart used for demo purposes - change to $('.gage').each(function(i){
    $('.chart span').css({"width" : "0"}).parent().each(function(i){
      // Loop through .gage elements
      $('p', this).html($(this).attr("data-label"));
    });
  }
}

var skillsCardsAnimation = {
	init: function(){
      // restart used for demo purposes - change to $('.gage').each(function(i){
    $('.chart span').css({"width" : "0"}).parent().each(function(i){
      // Set p html value to the data-label attr set in the element
      var timeout = parseInt(i) * 60 + 1000;
      // Set a timeout based on the iteration multiplied by 60 (will affect delay between animations) 
      $('span', this).delay(timeout).animate({"opacity" : "1"}, 0, function(){
        //Delay  
        $(this).css({"width" : $(this).parent().attr("data-level") + "%"});
      });
    });
  }
	
}

$(document).ready(function(){
	skillsCardsName.init();
	$(window).scroll(function () {
		if(!filled){
			if(isScrolledIntoView($(".skills"))){
			//setTimeout(function(){
				$(".allSkills").slideDown("slow");
				skillsCardsAnimation.init();
				filled = true;
			//}, 1000);	
			}
		}
		//if(isScrolledIntoView($(".allSkills"))){
		//	$(".allSkills").slideDown("slow");
		//	console.log("OK");
		//}
		
		
		
	});
  
  
  
  // Interval used for demo purposes - remove if using  
  //setInterval(function() {
      //gage.init();
  //}, 5000);
});


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}