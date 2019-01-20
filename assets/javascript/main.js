$(document).ready(function() {
    var animals = ["cat", "otter", "dog"];
    var animal;
    
    function renderButtons() {
        $("#animalButtons").empty();

    animals.forEach(function(animal) {
        var button = $("<button>");
        button.addClass("animal");
        button.attr("data-name", animal);
        button.text(animal);
        $("#animalButtons").append(button);  
      })
    }

    $("#plusAnimal").on("click", function(event) {
        event.preventDefault();
        var value = $("#addAnAnimal").val().trim();
        animals.push(value);
        renderButtons();
    });
    
    function alertAnimal() {
      animalName = $(this).attr("data-name");
    
    
    $(document).on("click",".animal", function(){

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3RAdvavxhi69zT49G8Fcr2QE3nIIdz4a&q=" + this.getAttribute("data-name") + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
        $("#animalView").text(JSON.stringify(response));

    
      /*var animalDiv = $("<div class = 'animal'>")  
      animalDiv.append(img);      
      $("#giphy").append(animalDiv);*/
      });
     });
    };
      //renderButtons(); 
})