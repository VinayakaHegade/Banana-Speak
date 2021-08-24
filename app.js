var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constURL(inputText) {
    return serverURL + "?" + "text=" + inputText
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something went wrong with server try again after sometime")
}

function eventClickHandler() {
    var inputText = textInput.value
    fetch(constURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            textOutput.innerText = translatedText
        })
        .catch(errorHandler)
}

buttonTranslate.addEventListener("click", eventClickHandler);