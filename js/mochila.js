const listaNomeItens = document.querySelectorAll(".botao-item");
const heroi = document.querySelector(".heroi");
const heroiNome = localStorage.getItem("personagem");

heroi.textContent = heroiNome;

listaNomeItens.forEach((item) => {
    item.addEventListener("click", (evento) => {
        evento.preventDefault();
        nomeItem = item.textContent;
        criaElemento(nomeItem);
    });
});

function criaElemento(nome) {
    const novoElemento = document.createElement("li");
    novoElemento.classList.add("itens-selecionados");
    novoElemento.textContent = nome;
    const lista = document.querySelector(".lista-itens");
    novoElemento.appendChild(botaoDeDeletar());
    lista.appendChild(novoElemento);
}

// o this me permite saber qual foi o elemento clicado
function botaoDeDeletar() {
    const botao = document.createElement("button");
    botao.innerText = "x";

    botao.addEventListener("click", function () {
        excluiElemento(this.parentNode);
    });
    return botao;
}

function excluiElemento(elemento) {
    elemento.remove();
}
