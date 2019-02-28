
// create a variable to monitor the state of the toggle button
var state = 1;

// Get the navbar
var navbar = document.getElementById("mynavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("wrapper");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("wrapper");
  }
}

function toggleDetails() {
  var x = document.getElementById("reqDetail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function toggleClarifications() {
// console.log (state)
  var sheet = (function() {
  	var style = document.createElement("style");
  	style.appendChild(document.createTextNode(""));
  	document.head.appendChild(style);
  	return style.sheet;
  })();
  if (state == 0)  {
    sheet.insertRule(".reqClar {display:none; }", 0);
    sheet.insertRule("#hideBtn {display:none; }", 0);
    state = 1
  } else {
    sheet.insertRule(".reqClar {display:block; }", 0);
    sheet.insertRule("#hideBtn {display:block; }", 0);
    state = 0
  }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 // function myFunction() {
 //   var x = document.getElementById("navbar");
 //   if (x.className === "navbar") {
 //     x.className += " responsive";
 //   } else {
 //     x.className = "navbar";
 //   }
 // }
