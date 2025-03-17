let nomes = [];

function adicionarNome() {
    const input = document.getElementById("nome");
    const nome = input.value.trim();
    
    if (nome && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
    }
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nomes.length > 1) {
        const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        document.getElementById("resultado").textContent = `Amigo secreto: ${sorteado}`;
    } else {
        alert("Adicione pelo menos 2 participantes!");
    }
}
