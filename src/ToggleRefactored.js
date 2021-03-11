// import React, { Component } from 'react';
import React, { useState } from 'react';

// export default class Refactored extends Component {
//     state = {
//         isToggled: false
//     };

//     toggle = () => {
//         this.setState(state => {
//             return { isToggled: !state.isToggled };
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggle}>Toggle</button>
//                 {this.state.isToggled && <h2>Hello!</h2>}
//             </div>
//         )
//     }
// }

export default function ToggleRefactored() {
  // Set button state to a boolean of false with the normal naming practice of isToggledButtonState
  const [isToggledButtonState, setButtonState] = useState(false);
  // Update the button state with setButtonState
  // default state is false (per video)

  // On button click, run an anonymous arrow function to setButtonState to inverse of boolean
  return (
    <div>
      <button
        type="button"
        onClick={() => setButtonState(!isToggledButtonState)}
      >
        Toggle
      </button>
      {/* condition buttonState, valueIfTrue : valueIfFalse */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
      {/* {isToggledButtonState ? <h2>Hello</h2> : null} */}
      {isToggledButtonState ? <h2>Hello</h2> : null}
      {/* ----- */}
      {/* We can also use a conditional (used in the video) */}
      {/* {isToggledButtonState && <h2>Hello</h2>} */}
    </div>
  );
}
