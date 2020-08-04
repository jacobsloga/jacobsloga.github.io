"use strict";


var is_swahili = false;

// ON PAGE LOAD
addEventListener('load', start);
async function start() {
  document.getElementById("language").addEventListener("click", toggle_language);
}

function toggle_language() {
  if (is_swahili) {
    to_english();
  } else {
    to_swahili();
  };

  is_swahili = !is_swahili;
  return;
}


function to_english() {
  document.getElementById("language").src = "/assets/languages/english.png";
}

function to_swahili() {
  document.getElementById("language").src = "/assets/languages/swahili.png";
}
