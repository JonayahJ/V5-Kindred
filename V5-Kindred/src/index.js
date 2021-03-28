import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import { Container } from '@material-ui/core';
import AppBar from '../src/Components/Layout/AppBar'

const App = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <h1>
          Hello neonates and fellow kindred!
        </h1>
        <p>
          Create your new character sheet here.
        </p>
      </Container>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

export default App
