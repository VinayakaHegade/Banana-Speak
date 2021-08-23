var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

function eventClickHandler() {
    textOutput.innerText = textInput.value + "this is translated";
}

buttonTranslate.addEventListener("click", eventClickHandler);