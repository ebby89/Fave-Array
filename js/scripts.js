$(document).ready(function() {
  $(".fave").submit(function(event) {
    var name = $("input#name").val();
    var food = $("input#food").val();
    var movie = $("input#movie").val();
    var animal = $("input#animal").val();

    var favorites = [name, food, movie];
    var list = favorites.push(animal);
    $(".results").prepend(favorites);

    var fave1 = favorites[0];
    var fave2 = favorites[1];
    var fave3 = favorites[2];
    var fave4 = favorites[3];

    $(".fave1").prepend(fave1);
    $(".fave2").prepend(fave2);
    $(".fave3").prepend(fave3);
    $(".fave4").prepend(fave4);

    event.preventDefault();
  });
});
