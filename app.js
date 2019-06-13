
$("#buttons-view").on("click", "button", function () {
    var topics = $(this).attr("data-emotion");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var emotionDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var emotionImage = $("<img>");
            emotionImage.attr("src", results[i].images.fixed_height.url);
            emotionDiv.append(p);
            emotionDiv.append(emotionImage);
            $("#gifs-appear-here").prepend(emotionDiv);
        }
    });

});

$("#add-emotion").on("click", function (event) {
    event.preventDefault();
    var emotion = $("#emotion-input").val().trim();
    var newButton = $("<button>").text(emotion);
    newButton.attr("data-emotion", emotion);
    $("#buttons-view").append(newButton);
    // $(emotion).empty();

})



// $("div").on("click", function() {
    
//     var state = $(this).attr("data-state"); 
//     var stillURL = $(this).attr("data-still");
//     var animateURL = $(this).attr("data-animate");

//     if (state === "still") {
//       $(this).attr("src", animateURL).attr("data-state", "animate");
//     } else{
//       $(this).attr("src", stillURL).attr("data-state", "still");
//     }
//   });