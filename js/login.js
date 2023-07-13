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
    window.location = "heroi.html";
    localStorage.setItem("personagem", input[0].value);
};

input[1].addEventListener("input", validaDados);

formulario.addEventListener("submit", enviaDados);
// const validaDados = (element) => {
//     if (element.value.length >= 3) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   const input = Array.from(document.querySelectorAll(".input-login"));
//   const botao = document.querySelector(".submit-login");

//   input.forEach((item) =>
//     item.addEventListener("input", () => {
// Verifica se ambos os item foram validados. O map retorna um array com o resultado da validação. O includes verifica se alguma validação foi false.
//   const invalido = input.map((item) => validaDados(item)).includes(false);
//   if (!invalido) {
//     botao.removeAttribute("disabled");
//   }
// })
//   );

// [sa,od]
//validaDados retorna false. includes false? sim (true)
//se não for invalido, ou seja, invalido recebeu true. Se nao for verdadeiro removo
