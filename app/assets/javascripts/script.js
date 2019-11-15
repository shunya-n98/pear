$(function() {
  $('.card').hover(
    ()=>{
      $('.text-box').fadeIn();
    },
    ()=> {
      $('.text-box').fadeOut();
    }
  );

});
