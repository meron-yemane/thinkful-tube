var youtubeEndpoint = "https://www.googleapis.com/youtube/v3/search";

var getDataFromAPI = function(searchTerm, callback) {
  var query = {
    part: "snippet",
    key: "AIzaSyBRvniau_Rpp507mDZgnJ_4PBbf6WjqjAQ",
    q: searchTerm,
  };
  $.getJSON(youtubeEndpoint, query, callback);
};

var displaySearchData = function(data) {
  var results = "";
  if (data.items.length > 0) {
    data.items.forEach(function(video) {
      results += "<a href=" + "https://www.youtube.com/watch?v=" + video.snippet.thumbnails.default.url.substring(23,34) + ">" + 
                 "<img src=" + video.snippet.thumbnails.default.url + "></a>"; 
    });
  } else {
    results += "<p>No Results</p>"
  };
  $(".js-search-results").html(results);
};

var submitListener = function() {
  $(".js-search-form").submit(function(event) {
    event.preventDefault();
    var searchTerm = $(this).find(".js-youtube-search").val();
    getDataFromAPI(searchTerm, displaySearchData)
  });
};

submitListener();