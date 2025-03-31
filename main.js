"use strict";

// Current goal: Create the page for current work being conducted along with week of the year

// Function to occur when a button is pressed, removes option icons from the display
// Currently as template only
function ClearOptions() {
    var x = document.getElementsByClassName("option");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
}