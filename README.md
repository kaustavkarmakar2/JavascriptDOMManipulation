# JavascriptDOMManipulation
The HTML DOM (Document Object Model) JavaScript can change all the HTML elements in the page. JavaScript can change all the HTML attributes in the page. JavaScript can change all the CSS styles in the page. JavaScript can remove existing HTML elements and attributes. JavaScript can add new HTML elements and attributes.
# CodeExample
var newDiv = document.createElement("div");
newDiv.innerHTML = "<p >Hello World!</p>";
document.body.append(newDiv);
