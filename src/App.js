import React, { Componenet } from 'react';
import Coin from './Coin';
import Coinflip from './Coinflip';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Coinflip />
      </div>
    );
  }
}

export default App;
