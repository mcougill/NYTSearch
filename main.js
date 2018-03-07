var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
    'api-key': "c15b92fa39a44bf189d243dcc60bdefa",
});

//var length = $('#length').val().trim();;

//var start = $('#start').val().trim();;

//var end = $('#end').val().trim();;

$(document).on('click', '#search', search) 


function search(){

    var title = $('#title').val().trim();

    event.preventDefault();

    console.log('step one')
    if ($('#title').val().trim()) {
        console.log('Step two')
        queryURL += $.param({
            'q': title

        })
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (result) {
            console.log(result);
            console.log(queryURL);
        });

        console.log('step three');
    };






};

$('#clear').on('click', function () {

});
