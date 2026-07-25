//collapsable items
var collapsables = document.getElementsByClassName("collapsible-button");

for (var i = 0; i < collapsables.length; i++) {
  //collapsables[i].addEventListener("hover", toggleCollapsible);
  collapsables[i].addEventListener("click", toggleCollapsible);
} 

var collapsables2 = document.getElementsByClassName("video-notes-button");
for (var i = 0; i < collapsables2.length; i++) {
  collapsables2[i].addEventListener("click", toggleCollapsible);
}

function toggleCollapsible() {
  console.log("click");
  this.classList.toggle("active");
  var body = this.nextElementSibling;
  if (body.style.display === "block") 
  {
    body.style.display = "none";
  }
  else 
  {
    body.style.display = "block";
  }
}