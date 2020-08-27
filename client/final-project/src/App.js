import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Form></Form>
    </Wrapper>
    
  )
}

export default App;
