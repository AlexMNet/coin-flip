import React, { Component } from 'react';
import './Coin.css';

class Coin extends React.Component {
  render() {
    return (
      <div className="Coin">
        <img
          className={`Coin-img ${this.props.isFlipping && 'flip-animation'}`}
          src={this.props.info.url}
          alt="{this.props.info.side}"
        />
      </div>
    );
  }
}

export default Coin;
