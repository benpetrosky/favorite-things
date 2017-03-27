$(function() {
  $("form").submit(function(){

    var color = $("#color").val();
    var food = $("#food").val();
    var animal = $("input:radio[name=animal]:checked").val();

    var favoriteThings = [color + ", " + food + ", " + animal];
    alert(favoriteThings);

  });
});
