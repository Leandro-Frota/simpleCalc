let inputCalc = document.getElementById('inputCalc')
let result = document.getElementById('result')

document.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        let resultado = eval(inputCalc.value);

        let objectToSave = {
            calc: inputCalc.value,
            result: resultado,
        }

        let previousValues = JSON.parse(window.localStorage.getItem('historic'));

        if(!previousValues){
            previousValues = []
        }

        previousValues.push(objectToSave);

        window.localStorage.setItem('historic',JSON.stringify(previousValues))

        result.innerText = resultado
    }
})