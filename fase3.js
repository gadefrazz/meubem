function check() {
  if (document.forms[0].elements[0].checked == true && document.forms[0].elements[1].checked == true && document.forms[0].elements[2].checked == true) {
    if (!$('.wrapper').hasClass('throb')) {
      // Do things on Nav Close
      $('.wrapper').addClass('throb');
      // Redirect to next phase after animation
      // 2 second delay for animation
    }
  } else {
    if ($('.wrapper').hasClass('throb')) {
      // Do things on Nav Close
      $('.wrapper').removeClass('throb');
    }
  }
}