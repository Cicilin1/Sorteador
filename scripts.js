const input1 = document.getElementsByTagName("input")[0]
const input2 = document.getElementsByTagName("input")[1]
const botao = document.getElementsByTagName('button')[0]
let resultado = document.querySelector('.result')






botao.addEventListener("click", calc)




function calc(){
    let result = Math.floor(Math.random() * (input2.value - input1.value + 1) + parseInt(input1.value))
    resultado.innerHTML = result;
    console.log(result);
    
}


