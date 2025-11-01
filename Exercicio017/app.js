let filmes = [];

function fnSalvar() {
    let umFilme = {
        nome: document.getElementById('nome').value,
        foto: document.getElementById('foto').value,
        ano: document.getElementById('ano').value,
        avaliacao: document.getElementById('avaliacao').value,
        trailer: document.getElementById('trailer').value,
        genero: document.getElementById('genero').value,
        duracao: document.getElementById('duracao').value,
        descricao: document.getElementById('descricao').value
    };

    let listadeFilmes = document.getElementById("listadeFilmes");
    localStorage.setItem("listadeFilmes", listadeFilmes.innerHTML);
    localStorage["listadeFilmes"] = listadeFilmes.innerHTML;
    localStorage.listadeFilmes = listadeFilmes.innerHTML;

    filmes.push(umFilme);
    fnListar();
    fnLimpar();
}

function fnListar() {
    let dados = "";

    filmes.forEach((umFilme, i) => {
        dados += `
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm">
                        <img src="${umFilme.foto}" class="card-img-top" alt="Foto de ${umFilme.nome}" style="height: 300px; object-fit: cover; object-position: top;">
                        <div class="card-body">
                            <h5 class="card-title">${umFilme.nome}</h5>
                            <p class="card-text">
                                 ${umFilme.ano} | ${umFilme.avaliacao} | ${umFilme.genero} | ${umFilme.duracao} <br> ${umFilme.descricao}
                            </p>
                            <button type="button" onclick="fnAssistirTrailer(${i})" class="btn btn-success w-100 mb-2">Assistir Trailer</button>
                            <button type="button" onclick="fnExcluir(${i})" class="btn btn-danger w-100">Excluir Filme</button>
                        </div>
                    </div>
                </div>`;
    });



    document.getElementById("listadeFilmes").innerHTML = dados;
}

function fnExcluir(indice) {
    filmes.splice(indice, 1);


    fnListar();
}

function fnAssistirTrailer(indice) {
    window.open(filmes[indice].trailer, "_blank");
}

function fnLimpar() {
    document.getElementById('formFilme').reset();
}

document.getElementById('btSalvar').addEventListener('click', fnSalvar);