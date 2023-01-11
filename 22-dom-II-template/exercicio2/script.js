// function escondeSenha(event) {
//     event.preventDefault();
//     const toggle = document.getElementById("password");
//     if (toggle.type === "password") {
//         toggle.type = "text"
//     } else {
//         toggle.type = "password"
//     }
// }
const passwordInput = document.getElementById('password');
const escondeSenha = (event) => {
    event.preventDefault()
    passwordInput.setAttribute('type', 'password')
}


const formulario = document.querySelector('.light');
formulario.classList.remove('light');
formulario.classList.add('dark');

