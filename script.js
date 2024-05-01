const display = document.getElementById("display");

function appendToDisplay(input){
   display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "-_-"
    }  
}
function power(){
    display.value = Math.pow(display.value, 2);
}
