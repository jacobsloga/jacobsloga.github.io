"use strict";

var facts;
var fact_len;

// ON PAGE LOAD
addEventListener('load', start);
async function start() {
  facts = await read_facts();
  fact_len = facts.length - 1;
  change();
  setInterval(function() {change();}, 3000);
}

// Read facts from file
async function read_facts() {
  facts = ["I am unable to load facts? Please refresh the page!"];
  
  await fetch("https://raw.githubusercontent.com/jacobsloga/jacobsloga.github.io/master/assets/did_you_know.txt")
  .then(function(res) {
    return res.text().then(function(text) {
      facts = text.split("\n");
    });
  });

  return facts;
}

// Change to a new fact
function change() {
  let index = Math.round(Math.random() * fact_len);
  document.getElementById("rollingText").innerHTML = "... that " + facts[index] + "?";
}
