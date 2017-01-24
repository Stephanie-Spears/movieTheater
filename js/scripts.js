function Movies(title, time, description){
  this.movieTitle = title;
  this.movieTime = time;
  this.movieDescription = description;
}

var billAndTed = {
  movieTitle : "Bill and Ted's Excellent Adventure",
  movieTime : ["11:00", "2:30", "4:30"],
  movieDescription : "Rad movie"
};

var xxxVin = {
  movieTitle : "XXX-NOT porn",
  movieTime : ["3:00", "2:30", "5:00"],
  movieDescription: "definitely not porn"
};

var hiddenFigures = {
  movieTitle : "Hidden Figures",
  movieTime : ["10:23", "5:30", "9:00"],
  movieDescription : "No idea, some movie"
};

$(document).ready(function(){
  $("button#billTed").click(function(event) {
    event.preventDefault();
    $("#billTedTimesShow").show();
  });
});
