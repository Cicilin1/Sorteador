const input1 = document.getElementsByTagName("input")[0]
const input2 = document.getElementsByTagName("input")[1]
const botao = document.getElementsByTagName('button')[0]
const btnerror = document.querySelector('.msg-error')
let resultado = document.querySelector('.result')



function validacao(){
    if(input1.value > input2.value){
        btnerror.style.display = "inline-block"
        btnerror.textContent = "O primeiro valor precisa ser menor"
        input1.value = " ";
        input2.value = " ";
        resultado.innerHTML = "Resultado"

    }else if (input2.value == 0 || input1.value == 0) {
        btnerror.style.display = "inline-block"
        btnerror.textContent="Preencha os campos com valores válidos"

    } else {
        btnerror.style.display = "none"
        calc()
    }
}

function calc(){
    let result = Math.floor(Math.random() * (input2.value - input1.value + 1) + parseInt(input1.value))
    resultado.innerHTML = result;
    console.log(result);
    
}


