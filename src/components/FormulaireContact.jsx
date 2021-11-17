/* eslint-disable no-console */
import React from 'react';
import './formulaireContact.css';

function formulaireContact() {
  const [firstName, setfirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [objet, setObjet] = React.useState('');
  const [message, setMessage] = React.useState('');

  const display = (e) => {
    e.preventDefault();
    console.log(`Your name:${firstName}`);
    console.log(`Your email:${email}`);
    console.log(`Your email subject:${objet}`);
    console.log(`Your mail message:${message}`);
    setfirstName(' ');
    setEmail(' ');
    setObjet(' ');
    setMessage(' ');
  };
  return (
    <div className="formulaireContact" id="sectionContact">
      <form>
        <h1>Would you like to contact us?</h1>
        <p className="textContact">Would you like to contact us? </p>
        {/* Input pour le Nom du Cocktail */}
        <h3>Your Name :</h3>
        <label htmlFor="contact">
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="Caméo"
          />
        </label>
        {/* Input Email */}
        <h3>Your Email :</h3>
        <label htmlFor="contact">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="cameo@email.com"
          />
        </label>
        {/* Input des Ingrédients */}
        <h3>Objet :</h3>
        <label htmlFor="contact">
          <input
            type="text"
            id="objet"
            value={objet}
            onChange={(e) => setObjet(e.target.value)}
            placeholder="I contact you following a bug on your website"
          />
        </label>
        {/* Input Instruction de Préparation */}
        <h3>Message :</h3>
        <label htmlFor="contact">
          <textarea
            type="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello, I am contacting you because there is a bug on a part of your site."
          />
          {/* Button Envoyé */}
          <button type="submit" onClick={display} className="submitCocktails">
            Send
          </button>
        </label>
      </form>
    </div>
  );
}

export default formulaireContact;
