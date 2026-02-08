function makeBigger() {
  // alert("Hello, world!");

  document.getElementById("textArea").style.fontSize = "24pt";
}

function setFancy() {
  const textArea = document.getElementById("textArea");
  const fancy = document.getElementById("fancyRadio").checked;

  // alert("Radio button changed!");

  if (fancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function moo() {
  const textArea = document.getElementById("textArea");

  // Uppercase the text
  let text = textArea.value.toUpperCase();

  // Adding Moo
  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    let s = sentences[i].trim();
    if (s.length === 0) continue;

    let words = s.split(" ");
    words[words.length - 1] = words[words.length - 1] + "-Moo";
    sentences[i] = words.join(" ");
  }

  textArea.value = sentences.join(".");
}
