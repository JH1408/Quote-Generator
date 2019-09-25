
$(document).ready(function() {
    $.getJSON('https://api.quotable.io/random', function(quote) {
      $('.quote').text('"' + quote.content + '"');
      $('.author').text(quote.author);
      $('.twitter a').attr('href', ($('.twitter a').attr('href') + quote.content + '  —  ' + quote.author));
  });
});

// Get a new quote
$('.refresh').click(function() {
    $.getJSON('https://api.quotable.io/random', function(quote) {
      $('.quote').text('"' + quote.content + '"');
      $('.author').text(quote.author);
      $('.twitter a').attr('href', ($('.twitter a').attr('href') + quote.content + '  —  ' + quote.author));
  });
});

// Hover over quote
$(document).on('mouseover', '.daily-quote', function() {
    $('.quote-additional').css('display', 'block');
    $('.quote').css('transform', 'translateY(-20px)');
    $('.quote-additional').css('transform', 'translateY(32px)');
  });

$(document).on('mouseout', '.daily-quote', function(e) {
    $('.quote-additional').css('display', 'none');
    $('.quote').css('transform', 'translateY(0px)');
    $('.quote-additional').css('transform', 'translateY(0px)');
  });
