var topics = [ "happy", "sad", "angry"]; //not currently linking

$("button").on("click", function () {
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
function renderButtons() {
    // $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("emotion");
        a.attr("data-emotion", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}

// function alertEmotion() {
//     var emotionName = $(this).attr("data-emotion");
//     alert(emotionName);
// }


$("#add-emotion").on("click", function (event) {
    event.preventDefault();
    var emotion = $("#emotion-input").val().trim();
    var newButton = $("<button>").text(emotion);
    // emotion = $("<button>").text(emotion);
    newButton.attr("data-emotion", emotion);
    $("#buttons-view").append(newButton);
    // topics.push(emotion);
    // renderButtons();
    
})
// $(document).on("click", ".emotion", alertEmotion);

// renderButtons();