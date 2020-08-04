"use strict";


var is_swahili = false;

// ON PAGE LOAD
addEventListener('load', start);
async function start() {
  document.getElementById("language").addEventListener("click", toggle_language);
}

function toggle_language() {
  if (is_swahili) {
    console.log("To English");
    to_english();
  } else {
    console.log("To Swahili");
    to_swahili();
  };

  is_swahili = !is_swahili;
  return;
}


async function to_english() {
  const content_dict = await load_json("https://raw.githubusercontent.com/jacobsloga/jacobsloga.github.io/master/about/assets/language/english.json");
  if (content_dict == "") {return;};
  console.log(content_dict);

  document.getElementById("language").src = "/assets/languages/english.png";
}

async function to_swahili() {
  const content_dict = await load_json("https://raw.githubusercontent.com/jacobsloga/jacobsloga.github.io/master/about/assets/language/swahili.json");
  if (content_dict == "") {return;};
  console.log(content_dict);

  document.getElementById("language").src = "/assets/languages/swahili.png";
}

// Read content from file
async function load_json(file_url) {
  var facts = "";

  await fetch(file_url)
  .then(res => res.json())
  .then(data => function (){
    console.log(data);
    facts = data;
  });

  return facts;
}
