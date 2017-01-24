function Movies(title, time, description){
  this.movieTitle = title;
  this.movieTime = time[];
  this.movieDescription = description;
}

var billAndTed = {
  movieTitle : "Bill and Ted's Excellent Adventure",
  movieTime : ["11:00", "2:30", "4:30"],
  movieDescription : "Rad movie"
};

var xxxVin = {
  movieTitle : "XXX-NOT porn",
  movieTime : ["2:30", "3:00", "5:00"],
  movieDescription: "definitely not porn"
};

var hiddenFigures = {
  movieTitle : "Hidden Figures",
  movieTime : ["10:23", "5:30", "9:00"],
  movieDescription : "No idea, some movie"
};

movieTimesFunction = function(billAndTed){
  var times = [];
  times = billAndTed.movieTimes;
  for (var i = 0; i < billAndTed.movieTime.length; i++){
    if (times[i] === times[0]){
      $("#billtedtime1").text(times[0]);
    } else if (times[i] === times[1]){
      $("#billtedtime2").text(times[1]);
    } else if (times[i] === times[2]){
      $("#billtedtime3").text(times[3]);
    };

    //RADIO BUTTON VALUE
  };
  return times;
};

$(document).ready(function(){
  // var price = $("input:radio:checked");

  $("button#billTed").click(function(event) {
    event.preventDefault();
    $("#billTedTimesShow").show();
    // var billMovieTimes = movieTimesFunction(billAndTed);
  });

// for (var i = 0; i < price.length; i++)
});


//
// $("radio buttons html value").ourPrototype that loops through the times section of the object and returns our three times values(input our bill and teds object);
