var APIKey = 'MousSd71xGs7yZKANjFEMGWgP9ffYHtV'
var parameters = 

var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?' + parameters + APIKey

//----------------------------------------------------------------------

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });