import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navbar';

const Test = styled.div`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const myNavbar = styled(Navbar)`
  color: white;
  background-color: blue;
`;

function App() {
  return (
    <myNavbar className="App">
      <Test>cc</Test>
    </myNavbar>
  );
}

export default App;
