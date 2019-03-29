
// create a variable to monitor the state of the toggle button
var state = 1;
// Get the navbar
var navbar = document.getElementById("mynavbar");
// Get the offset position of the navbar
var stickyPos = navbar.offsetTop;
// When the user scrolls the page, execute myFunction
window.onscroll = function() {makeSticky()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {
  if (window.pageYOffset >= stickyPos) {
    navbar.classList.add("sticky")
    navbar.classList.add("wrapper");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("wrapper");
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

function myHide() {
  var img = document.getElementById("myFigure");
  var area = document.getElementById("entryArea");

  console.log(img.classList)
  if (img.className === "") {
      img.classList.add("displayHide");
      area.style.width = "100%";

  } else {
      img.classList.remove("displayHide");
      area.style.width = "48%";

  }

}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 function myFunction() {
    // console.log(navbar)
   if (navbar.className === "navbar") {
       navbar.className += "responsive";
   } else {
     navbar.className = "navbar";

   }
 }


  function mySettingsFunc() {
    var mySettingsVar = document.getElementById("mySettings");
    // console.log(mySettingsVar)
    if (mySettingsVar.className === "settingsBar settingsHide") {
        mySettingsVar.classList.remove("settingsHide");
        mySettingsVar.classList.add("settingsShow");
      
    } else {
    mySettingsVar.classList.remove("settingsShow");
    mySettingsVar.classList.add("settingsHide");

    }
  }
