
$(document).ready(function(){

  getQuote();
  var quote;
  var author;

function getQuote(){

  var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
    quote = data.quoteText;
    author = data.quoteAuthor;
    $(".quote").html('"'+data.quoteText+'"');
    $(".author").html("-"+data.quoteAuthor);
  });
};
    $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + quote + author);
  });
    $("#newQuote").on("click", function(){
    getQuote();
  });
});
