const rappersBr = [
    "Kyan",
    "Veigh",
    "Tasha e Tracie",
    "Mc Luanna",
    "Julia Costa",
    "Matuê",
    "Sidoka",
    "Orochi",
    "BK'",
    "Filipe Ret",
    "Djonga",
    "L7nnon",
    "Teto",
    "Derek",
    "Cynthia Luz",
    "Major RD",
    "Xamã",
    "Costa Gold",
    "FBC",
    "Febem",
    "Yunk Vino",
    "Don L"
];

const CidadeNascimento = [
    "Praia Grande, SP",      // Kyan
    "Itapevi, SP",           // Veigh
    "São Paulo, SP",         // Tasha e Tracie
    "São Paulo, SP",         // Mc Luanna
    "São Paulo, SP",         // Julia Costa
    "Fortaleza, CE",         // Matuê
    "Belo Horizonte, MG",    // Sidoka
    "São Paulo, SP",         // Orochi
    "Rio de Janeiro, RJ",    // BK'
    "Rio de Janeiro, RJ",    // Filipe Ret
    "Belo Horizonte, MG",    // Djonga
    "São Paulo, SP",         // L7nnon
    "São Paulo, SP",         // Teto
    "Duque de Caxias, RJ",   // Derek
    "São Paulo, SP",         // Cynthia Luz
    "São Paulo, SP",         // Major RD
    "Rio de Janeiro, RJ",    // Xamã
    "São Paulo, SP",         // Costa Gold
    "São Paulo, SP",         // FBC
    "São Paulo, SP",         // Febem
    "São Paulo, SP",         // Yunk Vino
    "Brasília, DF"           // Don L
];

function fnListaArtistas() {
    for (let i = 0; i < rappersBr.length; i++) {
        document.getElementById("lista_artistas").innerHTML += `
    <div class="col-6 border text-center">
    ${rappersBr[i]} - ${CidadeNascimento[i]}
    </div>
    `
    }
}

fnListaArtistas()