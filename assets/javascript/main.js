$(document).ready(function() {
   var animals = ["cat", "dog", "otter", "ferret"];
   
/*function renderButtons(animals) {
   animals.forEach(function(animal){
    var button = $("<button>");
    button.addClass("animalButtons");
    button.attr("data-name", animal);
    button.text(animal);
    $("#animalButtons").append(button);
    console.log(buttons);
})*/

$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=3RAdvavxhi69zT49G8Fcr2QE3nIIdz4a&q=cat&limit=10&offset=0&rating=PG&lang=en",
    method: "GET"
    }).then(function(response) {
        console.log(response);
        for (var i =0; i<10; i++) { 
        var animalDiv = $("<div class = 'animal'>");
        var stillUrl = response.data[i].images.fixed_height_still.url;
        var rating = response.data[i].rating;
        var moveUrl = response.data[i].embed_url;
        var img = $("<img>").attr("src", stillUrl);
        var moveImg = $("<img>").attr("src", moveUrl);
            
        var ratingEl = $("<P>").text("Rating: "+ rating);
        
        animalDiv.prepend(ratingEl, img);
        $("#animalsView").html(animalDiv);

       /*if ("src" === stillUrl) {
           $(img).on("click", function(animate){
            $(img).append("src", moveUrl);
           });*/
        }     
    });
});

