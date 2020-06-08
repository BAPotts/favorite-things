$(document).ready(function() {
  $("form#myform").submit(function(event) {
    event.preventDefault();
    let favoriteArray = [];
    favoriteArray[0] = $("input#first-favorite").val();
    favoriteArray[1] = $("input#second-favorite").val();
    favoriteArray[2] = $("input#third-favorite").val();
    favoriteArray[3] = $("input#fourth-favorite").val();
    favoriteArray[4] = $("input#fifth-favorite").val();
    alert(favoriteArray);
  });
});