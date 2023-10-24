function skill() {
  document.getElementById("expreience").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("skill").style.display = "block";
}

function exp() {
  document.getElementById("skill").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("expreience").style.display = "block";
}

function education() {
  document.getElementById("skill").style.display = "none";
  document.getElementById("education").style.display = "block";
  document.getElementById("expreience").style.display = "none";
}

//text web 


/*var words = ['Full Stack Web Developer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.web').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
*/
var words = ['Full Stack Web Developer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset <= words[i].length) { // Change the condition here
        part = words[i].substr(0, offset);
        offset++; // Increment the offset
      } else {
        forwards = false;
        skip_count = 0;
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
      part = words[i].substr(0, offset);
      offset--; // Decrement the offset
    }
    $('.web').text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});


//scroll
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Function to show or hide the back-to-top button
    function toggleBackToTopButton() {
        if (window.scrollY > window.innerHeight / 2) {
            backToTopButton.style.opacity = "1";
            backToTopButton.style.pointerEvents = "auto";
        } else {
            backToTopButton.style.opacity = "0";
            backToTopButton.style.pointerEvents = "none";
        }
    }

    // Add a scroll event listener to trigger the function
    window.addEventListener("scroll", toggleBackToTopButton);

    // Initial check to show or hide the button based on scroll position
    toggleBackToTopButton();
});








