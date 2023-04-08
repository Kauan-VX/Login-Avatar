const validUsers = [
    { username: "kauanvieiraxavier@yahoo.com.br", password: "kauanvx" },
    { username: "usuario2@example.com", password: "senha2" },
  ];

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault(); // impede que o formulário seja enviado

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value;
  const password = passwordInput.value;

  const user = validUsers.find((user) => user.username === username && user.password === password);

  if (user) {
    // usuário válido, redireciona para a próxima página
    window.location.href = "";
    alert("Usuário e senha corretos. Seja Bem Vindo!");

  } else {
    // usuário inválido, exibe mensagem de erro
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
});


