const buttonEnviar = document.querySelector("button");

buttonEnviar.addEventListener("click", () => {
    const mensagem = document.querySelector(".formulario-enviado");
    mensagem.textContent = "Formulário enviado, entraremos em contato em breve";
})