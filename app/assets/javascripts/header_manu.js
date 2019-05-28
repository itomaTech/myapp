jQuery(document).ready(function(){
  /*open*/
  $('.fa-bars').on('click',function(){
    $('.sidebar').css(
      'display','block'
    ).animate({
      left:'0'
    }, 
      300
    );
    $('.sidebar-bg').css(
      'display','block'
    ).animate({
      opacity:'0.5'
    },
      300
    )
  });
  /*close*/
  $('.sidebar__icon').on('click',function(){
    $('.sidebar').animate({
      left:'-200px'
    },
      300
    );
    $('.sidebar-bg').animate({
      opacity:'0'
    },
      300
    );
    setTimeout(function(){
      $('.sidebar').css('display','none');
      $('.sidebar-bg').css('display','none');
    },
      300
    );
  });
});