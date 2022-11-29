const textAreaEl = document.getElementById('textarea')
const totalCounterEl = document.getElementById('total-counter')
const remainingCounterEl = document.getElementById('remaining-counter')

//event listener to track what is typed onto the textarea
textAreaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

//get the number of characters by getting the length of the string inside the text area
function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length
    remainingCounterEl.innerText = textAreaEl.getAttribute('maxLength') - textAreaEl.value.length
}


//challenge, update to ignore white spaces
// - onrefresh should clear the text area