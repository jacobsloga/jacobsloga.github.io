"use strict";

var is_swahili = false;

// ON PAGE LOAD
addEventListener('load', start);
async function start() {
  document.getElementById("language").addEventListener("click", toggle_language);
  to_english();
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
  const content_dict = await load_json("https://raw.githubusercontent.com/jacobsloga/jacobsloga.github.io/master/tales-and-tangents/assets/language/english.json");
  if (content_dict == "") {return;};
  sub_content(content_dict);
  document.getElementById("language").src = "/assets/languages/swahili.png";
}

async function to_swahili() {
  //ToDo
  const content_dict = await load_json("https://raw.githubusercontent.com/jacobsloga/jacobsloga.github.io/master/tales-and-tangents/assets/language/swahili.json");
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

// ToDo
// Sub content in html
function sub_content(content_dict) {
  document.title = content_dict.title;
  document.getElementById("nav-1").innerHTML = content_dict.navbar[0];
  document.getElementById("nav-2").innerHTML = content_dict.navbar[1];
  document.getElementById("nav-3").innerHTML = content_dict.navbar[2];

  const stories = ["jacobsloga", "dddtdd", "CoVision", "socialfootprint", "cybok"];
  for s in stories {
    document.getElementById(s).getElementById("heading").innerHTML = content_dict.stories[s].title;
    document.getElementById(s).getElementById("subheading").innerHTML = content_dict.stories[s].text;
    document.getElementById(s).getElementById("link").innerHTML = content_dict.stories[s].link;
  }
}
