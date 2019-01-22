$(document).ready(function() {
   var animals = ["cat", "dog", "otter", "ferret"];
   var animal;
   
for (var i = 0; i<animals.length;i++) {
    var button = $("<button>");
    button.addClass("btn btn-primary");
    button.addClass("animalButtons");
    button.text(animals[i]);
    $("#animalButtons").append(button);
}
$("#animalButtons").click(function() { 
    animal = animals[i];
    console.log("click");
    $("#animalButtons").val(animals[i]);
});

$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=3RAdvavxhi69zT49G8Fcr2QE3nIIdz4a&q=cat&limit=10&offset=0&rating=PG&lang=en",
    method: "GET"
    }).then(function(response) {
        console.log(response);
        for (var i =0; i<response.data.length; i++) {
        var animalDiv = $("<div class = 'animal'>");
        var stillUrl = response.data[i].images.fixed_height_still.url;
        var rating = response.data[i].rating;
        var moveUrl = response.data[i].embed_url;
        var img = $("<img>").attr("src", stillUrl);
            
        var ratingEl = $("<P>").text("Rating: "+ rating);
        
        animalDiv.append(ratingEl, img);
        $("#animalsView").before(animalDiv);
        
        $(img).on("click", function(){
            $(this).attr("src", moveUrl);
            /*if ("src" === stillUrl);
            $(img).appendTo("src", moveUrl);
            animalDiv.before(ratingEl, img);
            $("#animalsView").
             else 
                $(img).replaceWith("src", stillUrl);*/
           });
        }    
    });
})