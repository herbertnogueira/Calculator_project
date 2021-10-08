function calcular(n1, n2){
n1 = parseInt(document.getElementById("n1").value)
n2 = parseInt(document.getElementById("n2").value)

seletor = document.getElementById("seletor").value

switch(seletor){
    case '+':
        calculo = n1+n2
        document.getElementById("resultado").innerHTML = "Soma igual a "+ calculo
    break
    
    case '-':
    calculo = n1-n2
    document.getElementById("resultado").innerHTML = "Subtração igual a " +calculo
    break

    case '*':
        calculo = n1*n2
        document.getElementById("resultado").innerHTML = "Multiplicação igual a " +calculo
    break

    case '/':
        calculo = n1/n2
        document.getElementById("resultado").innerHTML = "Divisão igual a " +calculo
        break

        default:
        document.getElementById("resultado").innerHTML = "insira dados válidos"
    }
}
