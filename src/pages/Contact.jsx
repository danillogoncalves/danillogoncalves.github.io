import React from "react";

function Contact() {
  return (
    <form
      action="https://formsubmit.co/danillogoncalves001@gmail.com"
      method="POST"
    >
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="text" name="subject" required />
      <textarea name="message" required />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
