import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdHome, MdWork, MdContactMail } from 'react-icons/md';

import { Container, LinkStyled } from './styles';

export default function Menu() {
  const location = useLocation();

  return (
    <Container>
      <LinkStyled to="/" actived={location.pathname === '/' ? 1 : 0}>
        <MdHome size={32} />
        <strong>Home</strong>
      </LinkStyled>
      <LinkStyled to="/projects" actived={location.pathname === '/projects' ? 1 : 0}>
        <MdWork size={32} />
        <strong>Projetos</strong>
      </LinkStyled>
      <LinkStyled to="/contact" actived={location.pathname === '/contact' ? 1 : 0}>
        <MdContactMail size={32} />
        <strong>Contato</strong>
      </LinkStyled>
    </Container>
  );
}
