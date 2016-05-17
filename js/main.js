$(document).ready(main);

function main() {
  quoteGenerate();
  $('#quoteButton').click(quoteGenerate);
};

function quoteGenerate() {
  $(this).blur();
  $.ajax({
    url:'http://api.forismatic.com/api/1.0/',
    jsonp:'jsonp',
    dataType: 'jsonp',
    data: {
      method:'getQuote',
      lang:'en',
      format:'jsonp'
    }
})

  .done(function(json){
    var twitText = 'https://twitter.com/intent/tweet?text='
    $('#quote').html(json.quoteText);
    $('#cite').html(json.quoteAuthor === '' ? 'Unknown':json.quoteAuthor);
    $('#twitterButton').attr('href',twitText + $('#quote').text());
  })

  .fail(function(xhr, status, errorThrown ) {
    //$('#quote').text('Sorry, there was a     problem! ' + errorThrown + ' ' + status + ' ' + JSON.stringify(xhr));
  })
}
