import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <div>
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
