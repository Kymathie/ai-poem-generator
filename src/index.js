function generatePoem(event){
    event.preventDefault()

    new Typewriter('#poem', {
        strings: "In the early morning sun",
        autoStart: true,
        cursor: null,
        delay: 40,
      });
}


let poemElement = document.querySelector("#poem-generator")
poemElement.addEventListener("submit", generatePoem)