import React from 'react';
import styled from 'styled-components';

import logoMeditation from '../assets/logoMeditation.svg';
import logoNatation from '../assets/logoNatation.svg';
import logoVelo from '../assets/logoVelo.svg';
import logoMusculation from '../assets/logoMusculation.svg';

const ContainerAside = styled.aside`
  background-color: black;
  position: absolute;
  height: 100%;
  padding: 2rem;
  ul {
    li {
      padding: 1rem;
      &:hover {
        color: ${(props) => props.theme.colors.red};
      }
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Aside() {
  return (
    <ContainerAside>
      <ul>
        <li>
          <img src={logoMeditation} alt="sports" />
        </li>
        <li>
          <img src={logoNatation} alt="sports" />
        </li>
        <li>
          <img src={logoVelo} alt="sports" />
        </li>
        <li>
          <img src={logoMusculation} alt="sports" />
        </li>
      </ul>
    </ContainerAside>
  );
}

export default Aside;
