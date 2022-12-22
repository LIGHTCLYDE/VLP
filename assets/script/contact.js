function sendEmail() {
    Email.send({
        SecureToken : 'ee2b918a-0756-4843-a48d-90c3fd001921',
        To : 'volpitattoo@outlook.com',
        From : document.getElementById("email").value,
        Subject : "Novo E-mail de contato recebido",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Telefone: " + document.getElementById("phone").value
            + "<br> Mensagem: " + document.getElementById("message").value
            
    }).then(
      message => alert("E-mail Enviado Com Sucesso")
    );
}