const input = document.querySelectorAll(".input-login");
const botao = document.querySelector(".submit-login");
const formulario = document.querySelector(".container-login");

// o setAttribute recebe dois parametrso, o proprio atributo e o valor desse atributo
const validaDados = (evento) => {
    if (evento.target.value.length > 4) {
        botao.removeAttribute("disabled");
    } else {
        botao.setAttribute("disabled", "");
    }
};

const enviaDados = (evento) => {
    evento.preventDefault();
    window.location = "mochila.html";
    localStorage.setItem("personagem", input[0].value);
};

input[1].addEventListener("input", validaDados);

formulario.addEventListener("submit", enviaDados);
