"use strict";

// Current goal to display images with text underneath, with the images enlargening on hover of the mouse
// Each image should link to the same page, scrolling to that projects section

// Function to occur when a button is pressed, removes option icons from the display
// Currently as template only
function ClearOptions() {
    var x = document.getElementsByClassName("option");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
}