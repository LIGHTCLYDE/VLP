function sendEmail() {
    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "volpitattoo@gmail.com",
        Password : "vbhzduqegsrhutpz",
        To : 'volpitattoo@gmail.com',
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