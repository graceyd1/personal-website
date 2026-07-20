//collapsable items
var collapsables = document.getElementsByClassName("collapsible-button");

for (var i = 0; i < collapsables.length; i++) {
  //collapsables[i].addEventListener("hover", toggleCollapsible);
  collapsables[i].addEventListener("click", toggleCollapsible);
} 

function toggleCollapsible() {
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