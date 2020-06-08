$(document).ready(function() {
  $("form#myform").submit(function(event) {
    event.preventDefault();
    let favoriteArray = [];
    favoriteArray[0] = $("input#first-favorite").val();
    favoriteArray[1] = $("input#second-favorite").val();
    favoriteArray[2] = $("input#third-favorite").val();
    favoriteArray[3] = $("input#fourth-favorite").val();
    favoriteArray[4] = $("input#fifth-favorite").val();
    
    let newArray = [];
    newArray.push(favoriteArray[1],favoriteArray[0],favoriteArray[2]);
    
    $("#result1").text(newArray[0]);
    $("#result2").text(newArray[1]);
    $("#result3").text(newArray[2]);
  });
});