import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  color: blue;
  font-size: 50px;
  width: 400px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StyledButton
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledButton>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
