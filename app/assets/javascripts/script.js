$(function() {
  $('#walk').hover(
    ()=>{
      $('#text-box-walk').fadeIn();
    },
    ()=> {
      $('#text-box-walk').fadeOut();
    },);

  $('#del').hover(
    ()=>{
      $('#text-box-del').fadeIn();
    },
    ()=> {
      $('#text-box-del').fadeOut();
    });

});
