const textInput = document.querySelector("#text-input")
const clickBtn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output")




// var userName = prompt("Give me your user Name")
// alert( "This script works " + userName)

function errorHandler(error){
    console.log("error coccured", error)
    alert("Try after some time")
}

function eventHandler(){
    
    outputDiv.innerText = "afdgyurjhbrf " + textInput.value 

}


.catch(errorHandler)



clickBtn.addEventListener("click", eventHandler)

