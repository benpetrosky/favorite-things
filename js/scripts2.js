$(function(){
  var newSentence = [];
  $("form").submit(function() {
    var sentence=$("#sentence").val();
    var sentenceArray=sentence.split(" ");
    sentenceArray.forEach(function(word) {
      var wordLength=word.length;
      if (wordLength >= 3) {
        newSentence.push(word);
      }

    });
  var reversedNew = (newSentence.reverse());
  alert(reversedNew.join("stupid"));

  })
});
