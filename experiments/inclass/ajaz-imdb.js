(function(){
    $(init);
    function init()
    {
        $("#searchMovie").click(searchMovie);
        var movieTitle = $("#movieTitle");
        function searchMovie(){
            var title = movieTitle.val();
            alert("searchmovie: " + title);
            $.ajax({
                url:"http://www.myapifilms.com/imdb?name=Titanic&format=JSON&filmography=0&limit=3&lang=en-us&exactFilter=0&bornDied=0&starSign=0&uniqueName=0&actorActress=0&actorTrivia=0&actorPhotos=N&actorVideos=N&salary=0&spouses=0&tradeMark=0&personalQuotes=0&starMeter=0"
            })
        }
    }
})();