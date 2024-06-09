const display = document.getElementById('enter')
function clearDisplay(){
    display.value = ''
}

function deleteLast(){
    display.value = display.value.slice(0, -1)
}

function appendNumber(number){
    display.value += number
}

function appendOperaitor(operador){
    if(display.value === ''){
        return;
    }
    const lastChar = display.value.slice(-1)
    if('+-*/'.includes(lastChar)){
        display.value = display.value.slice(0, -1)
    }
    display.value += operador
}

function calculate(){
    try{
        const result = eval(display.value)
        display.value = result
    }catch(e){
        display.value = 'erro'
    }
}