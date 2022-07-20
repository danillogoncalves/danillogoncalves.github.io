import React from "react";
import "../scss/Contact.scss";

function Contact() {
  return (
    <form
      className="contact-container"
      action="https://formsubmit.co/danillogoncalves001@gmail.com"
      method="POST"
    >
      <h1>Fale comigo</h1>
      <input type="text" name="name" placeholder="Nome *" required />
      <input type="email" name="email" placeholder="Email *" required />
      <input type="text" name="subject" placeholder="Assunto *" required />
      <textarea name="message" placeholder="Mensagem *" rows="10" required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact;
