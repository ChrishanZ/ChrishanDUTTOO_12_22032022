import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

const ContainerNavbar = styled.nav`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  img {
  }
  ul {
    display: flex;
    width: 100%;
    max-width: 1100px;
    justify-content: flex-end;
    font-size: 2.4rem;
    font-weight: 500;
    li {
      padding: 0 4rem;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

function Navbar() {
  return (
    <ContainerNavbar>
      <img src={logo} alt="SportSee" />
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </ContainerNavbar>
  );
}

export default Navbar;
