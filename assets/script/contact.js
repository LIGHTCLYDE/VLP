function sendEmail() {
    Email.send({
        SecureToken : "716b0632-bae7-49e5-97bd-d2cdc5d4e862",
        To : 'volpitattoo@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Novo E-mail de contato recebido ",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Telefone: " + document.getElementById("phone").value
            + "<br> Mensagem: " + document.getElementById("message").value
            
    }).then(
      message => alert("E-mail Enviado Com Sucesso")
    );
}