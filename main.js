var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
  'api-key': "c15b92fa39a44bf189d243dcc60bdefa"
});

$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function(result) {
  console.log(result);
  console.log(queryURL);
});