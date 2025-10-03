function fnMostrarNumero(){
    let numero = document.getElementById("numero").value
    document.getElementById("Resposta").innerText = "O número informado foi: " + numero
    document.getElementById("numero").value = ""
}