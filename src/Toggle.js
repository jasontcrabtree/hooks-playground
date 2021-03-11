/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

export default class Refactor extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    isToggled: false,
  };

  toggle = () => {
    this.setState((state) => ({ isToggled: !state.isToggled }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          Toggle
        </button>
        {this.state.isToggled && <h2>Hello!</h2>}
      </div>
    );
  }
}
