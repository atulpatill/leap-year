const dateInput = document.querySelector("#input1")
const clickBtn = document.querySelector("#btn");
const luckyNo = document.querySelector("#lucky")
const outputDiv = document.querySelector("#output")


clickBtn.addEventListener("click", ()=> {
    
    number = Number(luckyNo.value)
    if(number && dateInput.value ){
    if(number === 7 | number === 9 | number === 3){
        // console.log("yes")
        outputDiv.innerText = "Hurray! your birthday is lucky!!"
    }else{
        outputDiv.innerText = "Ohh sorry your birthday is not lucky"
    }
}else{
  outputDiv.innerText =   "plz enter all the inputs"
}
})



