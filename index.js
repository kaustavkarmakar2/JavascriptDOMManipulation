var newDiv = document.createElement("div");
newDiv.innerHTML = "<p >Hello World!</p>";
document.body.append(newDiv);
function myFunction() {
  var list = document.getElementsByClassName("example")[0];
  list.getElementsByClassName("child")[0].innerHTML = "Milk";
}
