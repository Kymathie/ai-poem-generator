function showPoem(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 40,
      });
      console.log(response.data.answer)
}

function generatePoem(event){
    event.preventDefault()



let poemInput = document.querySelector("#user-input")
    let apiKey = "28dfoad314b78930c81640808f41tf65"
    let prompt = `generate a short poem about ${poemInput.value}`
    let context = "please make a short poem with four lines and separate each line with a <br />"
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
    
    let poemWaiting = document.querySelector("#poem")
    poemWaiting.innerHTML = `<div class="blink"> Generating poem about ${poemInput.value}. Please wait...</div>`
    poemWaiting.classList.remove("hidden")


    axios.get(apiUrl).then(showPoem)
   
}


let poemElement = document.querySelector("#poem-generator")
poemElement.addEventListener("submit", generatePoem)