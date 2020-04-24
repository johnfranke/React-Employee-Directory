import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import MaterialTableDemo from "./components/Table.js";
import { Container } from '@material-ui/core';



function App() {
  return (
    <div className="App">
      <Header />
        <Container fixed>
          <MaterialTableDemo />         
        </Container>    
    </div>
  );
}

export default App;