function media(){
var val1 = document.getElementById('valor1').value;
var val2 = document.getElementById('valor2').value;
var result = (parseInt(val1) + parseInt(val2))/2;
    if(result >= 6) 
    alert('Aprovado')
    else
    alert('Reprovado')
    if(result>=6)
    alert('Sua média foi: ' + result + ' Você foi aprovado, parabéns amigão!!!')
    else
    alert('Sua média foi: ' + result + ' Tem que estudar mais ai, jogador...')
}
function comparar(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    if(val1 == val2)
    alert('Os valores são iguais.')
    
    else if(val1 > val2)
    alert("Valor 1 é maior que Valor 2.");
    else
    alert("Valor 2 é maior que Valor 1.");
}