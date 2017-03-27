$(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var color = $("#color").val();
    var food = $("#food").val();
    var animal = $("input:radio[name=animal]:checked").val();

    var favoriteThings = [color, food, animal];
    // alert(favoriteThings);
    var evenMoreFavoriteThings = [];
    evenMoreFavoriteThings.push(favoriteThings[2], favoriteThings[0], favoriteThings[1]);

    // alert(evenMoreFavoriteThings.pop());

  $("#foodReturn").text(favoriteThings[1]);
  $("#colorReturn").text(favoriteThings[0]);
  $("#animalReturn").text(favoriteThings[2]);
  $(".return").show();
  });
});
