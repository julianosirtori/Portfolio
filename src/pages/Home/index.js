import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import HomeImage from '../../assets/home.svg';
import { Container, Infos, SocialLinks } from './styles';

export default function Home() {
  return (
    <Container>
      <Infos>
        <span>Olá,</span>
        <span>
          Eu sou o
          <strong> Juliano Sirtori</strong>
        </span>
        <span>um Full Stack Developer</span>
        <SocialLinks>
          <a href="https://github.com/julianosirtori" target="_blank">
            <FaGithub size={21} />
          </a>
          <a href="https://www.linkedin.com/in/juliano-sirtori/" target="_blank">
            <FaLinkedin size={21} />
          </a>
          <a href="https://www.instagram.com/julianosirtori/" target="_blank">
            <FaInstagram size={21} />
          </a>
        </SocialLinks>
      </Infos>
      <img src={HomeImage} alt="home" />
    </Container>
  );
}
