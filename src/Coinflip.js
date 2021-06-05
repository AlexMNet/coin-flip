import React, { Component } from 'react';
import './Coinflip.css';
import Coin from './Coin';
import { choice } from './helpers';

class Coinflip extends React.Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/2021-P_US_Quarter_Obverse.jpg',
      },
      {
        side: 'tails',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/2021_GW_crossing_Delaware_quarter_reverse.jpeg/440px-2021_GW_crossing_Delaware_quarter_reverse.jpeg',
      },
    ],
  };
  state = {
    currCoin: this.props.coins[0],
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
    isFlipping: false,
  };

  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });

    this.setState({ isFlipping: true });
    setTimeout(() => {
      this.setState({ isFlipping: false });
    }, 1000);
  };

  reset = () => {
    this.setState((st) => {
      return {
        currCoin: this.props.coins[0],
        nFlips: 0,
        nHeads: 0,
        nTails: 0,
      };
    });

    this.setState({ isFlipping: true });
    setTimeout(() => {
      this.setState({ isFlipping: false });
    }, 1000);
  };

  handleClick = () => {
    this.flipCoin();
  };

  render() {
    return (
      <div className="Coinflip">
        <h2>Let's Flip A Coin!</h2>
        <Coin info={this.state.currCoin} isFlipping={this.state.isFlipping} />
        <div className="Coinflip-btn-container">
          <button className="Coinflip-btn flip" onClick={this.handleClick}>
            Flip Me!
          </button>
          <button className="Coinflip-btn reset" onClick={this.reset}>
            Reset
          </button>
        </div>
        <p>Flips: {this.state.nFlips}</p>
        <p>Heads: {this.state.nHeads}</p>
        <p>Tails: {this.state.nTails}</p>
      </div>
    );
  }
}

export default Coinflip;
