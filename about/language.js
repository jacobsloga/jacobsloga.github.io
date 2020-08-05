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

async function to_english() {
  const content_dict = await load_json("https://raw.githubusercontent.com/jacobsloga/jacobsloga.github.io/master/about/assets/language/english.json");
  if (content_dict == "") {return;};
  sub_content(content_dict);
  document.getElementById("language").src = "/assets/languages/swahili.png";
}

async function to_swahili() {
  const content_dict = await load_json("https://raw.githubusercontent.com/jacobsloga/jacobsloga.github.io/master/about/assets/language/swahili.json");
  if (content_dict == "") {return;};
  sub_content(content_dict);
  document.getElementById("language").src = "/assets/languages/english.png";
}

// Read content from file
async function load_json(file_url) {
  var content = "";

  await fetch(file_url)
  .then(res => res.json())
  .then(data => {
    content = data;
  });

  return content;
}

// Sub content in html
function sub_content(content_dict) {
  document.title = content_dict.title;
  document.getElementById("nav-1").innerHTML = content_dict.navbar[0];
  document.getElementById("nav-2").innerHTML = content_dict.navbar[1];
  document.getElementById("nav-3").innerHTML = content_dict.navbar[2];

  document.getElementById("about-heading").innerHTML = content_dict.about.heading;
  document.getElementById("about-subheading").innerHTML = content_dict.about.subheading;
  document.getElementById("about-text-1").innerHTML = content_dict.about.text_body[0];
  document.getElementById("about-text-2").innerHTML = content_dict.about.text_body[1];
  document.getElementById("about-text-3").innerHTML = content_dict.about.text_body[2];

  document.getElementById("future-heading").innerHTML = content_dict.future.heading;
  document.getElementById("future-subheading").innerHTML = content_dict.future.subheading;
  document.getElementById("future-text-1").innerHTML = content_dict.future.text_body[0];
  document.getElementById("future-text-2").innerHTML = content_dict.future.text_body[1];
  document.getElementById("future-text-3").innerHTML = content_dict.future.text_body[2];
}
