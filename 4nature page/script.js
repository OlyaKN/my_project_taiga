$( function(){
 $(".menu-toggle").on('click', function() {
   $(this).toggleClass("on");
   $('.menu-section').toggleClass("on");
   $("nav ul").toggleClass('hidden');
 });
}
);

$(window).scroll(function(){
 $('section').each(function(){ 
   if ($(this).offset().top < $(window).scrollTop()) {
     var difference = $(window).scrollTop() - $(this).offset().top;
      var half = (difference / 2) + 'px',
      transform = 'translate3d( 0, ' + half + ',0)';
 $(this).find('img').css('transform', transform);
 } else {
 $(this).find('img').css('transform', 'translate3d(0,0,0)');
		    }
		  });
});