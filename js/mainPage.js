

//setTimeout(function(){
//  $(".loadingHourGlass").hide();
//  
  
//}, 3500);

$( window ).resize(function() {
  //var position = $("#myPerson").offset();
  //console.log(position.top,position.left);
});


$(document).ready(function(){
	$("#page").show();
	//var position = $("#myPerson").offset();
	//y x width angle
	//document.body.appendChild(createLineElement(37, 60, 120, 100));
	//document.body.appendChild(createLineElement(352, 120, 200, 100));
	//$(".loadingHourGlass").show();
	var target = $('#fixed-navbar').offset().top;

	$(window).scroll(function() {
    
    if ($(window).scrollTop() > target) {
        
        $('#fixed-navbar').addClass('sticky');
        
    } else {
        
        $('#fixed-navbar').removeClass('sticky');       
    }
    
});

});



