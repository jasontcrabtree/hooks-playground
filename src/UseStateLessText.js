// First: import useState. It's a named export from 'react
import React, { useState } from 'react';

/* Our LessText component expects 2 props:
- text = the text to display
- maxLength = how many characters to show before "read more"
*/
function LessText({ text, maxLength }) {
  /*
    Create a piece of state, then initialize it to 'true'
    - hidden will hold the current value of the state
    - setHidden will let us change the state
     */
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, we just render it
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  /*
    Render the text (shortened or full-length) followed by a link to expand or collapse it based on state.
    When a link is clicked, update the value of `hidden`, which will trigger a re-render.
    */
  return (
    <span>
      {/* condition = hidden, valueIfTrue : valueIfFalse */}
      {/* init state as true, if state is true then valueIfTrue which is text shortened to maxLength, if state is false display full text with no modifiers */}
      {hidden ? `${text.substr(0, maxLength).trim()} …` : text}
      <br />
      <br />
      {/* depending on hidden being true or false, we change the button text and change the onClick status to be setHidden state to false or true vice versa */}
      {hidden ? (
        <button type="button" onClick={() => setHidden(false)}>
          {' '}
          read more
        </button>
      ) : (
        <button type="button" onClick={() => setHidden(true)}>
          {' '}
          read less
        </button>
      )}
    </span>
  );
}

export default LessText;
