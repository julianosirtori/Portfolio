/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container, Content } from './styles';
import ContactImage from '../../assets/contact.svg';

export default function Contact() {
  return (
    <Container>
      <h1>Entre em Contato</h1>
      <Content>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" required type="email" placeholder="example@gmail.com" />

          <label htmlFor="assunto">Assunto</label>
          <input id="assunto" required type="text" placeholder="Digite o assunto" />

          <label htmlFor="contato">Contato</label>
          <textarea required />

          <button type="submit">Enviar</button>

        </form>
        <img src={ContactImage} alt="contact" />
      </Content>
    </Container>

  );
}
