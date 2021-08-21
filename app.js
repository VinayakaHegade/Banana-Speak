var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-area");


function eventClickHandler () {
    console.log(textInput.value);
};

buttonTranslate.addEventListener("click", eventClickHandler)
