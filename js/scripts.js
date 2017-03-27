$(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var color = $("#color").val();
    var food = $("#food").val();
    var animal = $("input:radio[name=animal]:checked").val();

    var favoriteThings = [color, food, animal];
    var evenMoreFavoriteThings = [];
    evenMoreFavoriteThings.push(favoriteThings[2], favoriteThings[0], favoriteThings[1]);

  $("#foodReturn").text(favoriteThings[1]);
  $("#colorReturn").text(favoriteThings[0]);
  $("#animalReturn").text(favoriteThings[2]);
  $(".return").show();
  });

  var tags =["h3", "h1", "label"]

  tags.forEach(function(tag){
    $(tag).click(function(){
      alert("this is a " + tag + " tag.")
    });
  });

});
