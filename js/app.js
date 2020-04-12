$(document).ready(function () {
    $('.menu-toggler').on('click',function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });


    $(document).ready(function(){

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#up').fadeIn();
            } else {
                $('#up').fadeOut();
            }
        });
    
        //Click event to scroll to top
        $('#up').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    
    });

    if (document.readyState == 'complete') 
{
    AOS.refresh();
}
    $(function() {
        AOS.init({
   easing:'ease',
   duration:1800,
  once:true
        });
      });
});
    