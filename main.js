// function to display conent
function displayContent(content){
    inputtext.value +=content
}
// clear input
function calClear(){
    inputtext.value= ""
}
// result
function calcOutput(){
    inputtext.value= eval(inputtext.value)
}
// backspace
function removeLastDigit(){
    inputtext.value= inputtext.value.slice(0,-1)
}