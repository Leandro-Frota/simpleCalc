let inputCalc = document.getElementById('inputCalc')
let result = document.getElementById('result')

document.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        let resultado = eval(inputCalc.value);

        result.innerText = resultado
    }
})