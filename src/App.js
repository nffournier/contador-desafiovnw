import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&display=swap');

body { 
  font-family: 'Raleway', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #c7aae3;
}
`;

const Container = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: #46305c;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }
  h2 {
    font-size: 3.8rem;
  }
`;

const BoxButton = styled.div`
  margin-top: 1rem;
  button {
    font-size: 2rem;
    color: #7c5c9c;
    background-color: #ece1f7;
    margin: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #7c5c9c;
  }
`;

class App extends Component {
  state = {
    count: 0
  };

  counterIncremento = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };
  counterDecremento = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        <h1>Contador</h1>
        <h2>{this.state.count}</h2>
        <BoxButton>
          <button onClick={this.counterIncremento}>+</button>
          <button onClick={this.counterDecremento}>-</button>
        </BoxButton>
      </Container>
    );
  }
}

export default App;
