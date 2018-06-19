var nintendoChar = ["Mario", "Link", "Samus", "Kirby", "Fox McCloud"];

var character = $(this).attr("data-name");
var apiKey = "l6tFREk09Hw9braVsKXvCbcIskMh7ovi";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=mario&api_key=" + apiKey;


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  console.log(response);


});