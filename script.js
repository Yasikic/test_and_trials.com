
/*
function createColorBox(ID) {
    lineID = 'line-' + ID;
    spanID = 'box-' + ID;

    // Prepate variables
    const line = document.getElementById(lineID); // Get line inside colors menu
    const span = document.getElementById(spanID); // Get span for color box

    // Set color for box
    const color = line.textContent; // Get color hex code
    const bckgColor = 'background: ' + color + ';'; // Prepare box style

    // Apply the style
    span.style = bckgColor;
    span.innerHTML = '&nbsp;'
  }

function doAll(){

  const li = document.getElementsByClassName('box');

  var rowName = [];
  for (let i = 0; i < li.length; i++) {
    let a = i+1
    let span = li[i].getElementsByTagName('span')[0];
    rowName.push(a);
    li[i].id = 'line-' + rowName[i]; // Add IDs to line tags
    span.id = 'box-' + rowName[i];   // Add IDs to span tag
    createColorBox(a)
  }
} */

function myFunction() {

   function toggleClass(element, className){
     for (var i = 0; i < element.length; i++) {
       element[i].classList.toggle(className);
     }
   }

   var page = document.body;
   page.classList.toggle("dark-mode");

   var section = document.getElementsByTagName("section");
   var footer = document.getElementsByTagName("footer");

   var iconsFas = document.getElementsByClassName("fas");
   var iconsFar = document.getElementsByClassName("far");
   var iconsFab = document.getElementsByClassName("fab");
   var date = document.getElementsByClassName("date");
   var actual = document.getElementsByClassName("actual");

   var hover = document.querySelectorAll('.hover');
   var pgl = document.querySelectorAll('.pgl');


   toggleClass(pgl, "dark-pgl");
   toggleClass(actual, "dark-actual");
   toggleClass(hover, "dark-hover");
   toggleClass(section, "dark-mode-section");
   toggleClass(footer, "dark-mode-footer");
   toggleClass(iconsFas, "dark-icons");
   toggleClass(iconsFar, "dark-icons");
   toggleClass(date, "dark-icons");
   toggleClass(iconsFab, "dark-icons");

}
