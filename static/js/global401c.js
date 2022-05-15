
function OnSubmitFooter(token) {
  document.getElementById("footerNewsLetter").submit();
}
function OnSubmitCustom(token) {
  document.getElementById("customNewsLetter").submit();
}

$(function() {
  $('.matchHeight').matchHeight();
  $('.matchHeight_header').matchHeight();
  $('.matchHeight_title').matchHeight();
  $('.matchHeight_specsHeader').matchHeight();
  $('.matchHeight_pricingHeader').matchHeight();

  $('.matchHeight_specs').matchHeight();
  $('.matchHeight_card').matchHeight();
});

$(document).ready(function(){
  sal({threshold: 0.2,
    animateClassName:"bobBlock",
    });

  $('#getStarted').click(function(evt) {
    evt.preventDefault();
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top
    }, 1000);
  });
});
