function fnValidarIdadeCNH(){
    let nomeUsuario = document.getElementById("txtNome").value
    let idadeUsuario = document.getElementById("txtIdade").value

    console.log(idadeUsuario)

    event.preventDefault()

    if(idadeUsuario >= 18){
        texto = ("Parabéns " + nomeUsuario + "! Você está apto a tirar a CNH.")
        document.getElementById("resultado").innerHTML = texto
        
    }else{
        texto = ("Desculpe " + nomeUsuario + "! Você não está apto a tirar a CNH.")
        document.getElementById("resultado").innerHTML = texto
    }
}