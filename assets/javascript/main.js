$(document).ready(function() {
   var animals = ["cat", "dog", "otter", "ferret", "frog"];
 
//this code is supposed to take the user input and add a button
$("#addAnAnimal").click(function(event) { 
    event.preventDefault();
    var value = $("#plusAnimal").val().trim();
    animals.push(value); 
    console.log(value);   
});

   // this section creates the animal buttons   
for (var i = 0; i<animals.length;i++) {
    var button = $("<button>");
    button.addClass("btn btn-primary");
    button.addClass("animalButtons");
    button.text(animals[i]);
    button.attr("data-name", animals[i]);
    $("#animalButtons").append(button);
}

//this code is supposed to take the user input and add a button
$("#addAnAnimal").click(function(event) { 
    event.preventDefault();
    var value = $("#plusAnimal").val().trim();
    animals.push(value); 
    console.log(value);   
});

// this is where the user clicks on a button to select an animal to retrieve the gifs
$("#animalButtons").on("click","button",function(e){
    event.preventDefault();
    var animal = $(this).attr("data-name");
    console.log(animal);
 
//this is where the data from the api is retrieved
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=3RAdvavxhi69zT49G8Fcr2QE3nIIdz4a&q=" + animal + "&limit=10&offset=0&rating=PG&lang=en",
    method: "GET"
    }).then(function(response) {
        console.log(response);
        //setting up variables to use later
        for (var i =0; i<response.data.length; i++) {
        var animalDiv = $("<div class = 'animal'>");
        var stillUrl = response.data[i].images.fixed_height_still.url;
        var rating = response.data[i].rating;
        var moveUrl = response.data[i].images.fixed_height.url;
        var img = $("<img>").attr("src", stillUrl);
            
        var ratingEl = $("<P>").text("Rating: "+ rating);
        
        //this is what makes the images and info appear on the screen
        animalDiv.append(ratingEl, img);
        $("#animalsView").before(animalDiv);
        
        //this is what makes the images move, it only works for the last one
        $(img).on("click", function(){
            $(this).attr("src", moveUrl);
            /*This is an attempt at making the still and animate work
            if ("src" === stillUrl);
            $(img).appendTo("src", moveUrl);
            animalDiv.before(ratingEl, img);
            $("#animalsView").
             else 
                $(img).replaceWith("src", stillUrl);*/
           });
        }   
    })
    });
})