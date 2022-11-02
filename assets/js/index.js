$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
   if(windowScroll >= 100)
    {
        $('#navBar').css('opacity' , '1');
        $('#navBar').css('backgroundColor' , 'black');
    }
    
    else 
    {
        $('#navBar').css('opacity' , '1');
        $('#navBar').css('backgroundColor' , 'transparent');
    }
})
let aboutoffset = $('#about').offset().top ;