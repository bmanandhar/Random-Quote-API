$(document).ready(function(){
  getQuote();
  var quote, author;

  function getQuote(){
  var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
    console.log("Bijaya's codepen");
    console.log(typeof data);
    console.log("Type of data");
    quote = data.quoteText;
    if (data.quoteAuthor) {
      author = data.quoteAuthor;
    } else {
      author = "Anonymous";
    }
    $(".quote").html('"'+quote+'"');
    $(".author").html("-"+author);
  });
};
    $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + quote + "   - " + author);
  });
    $("#newQuote").on("click", function(){
    getQuote();
  });
});
