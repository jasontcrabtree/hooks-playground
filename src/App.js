import React, { useState } from 'react';
// import Refactor from './Toggle';
import ToggleRefactored from './ToggleRefactored';
// useState can only be used on function based components

// NOTES
/*
You can use your state stuff (nameOfDish, setNameOfDish) like any other JS variable, passing it around and using elsewhere in your codebase
For instance, you might have form submitting code imported from elsewhere
In this form example we'll pretend the form submit function is being imported

*/

const App = () => {

  // GENERAL FORMULA FOR USESTATE DECLRARATION
  // 1. VALUE, 2. WAY TO SET VALUE, 3. INITIAL STATE VALUE
  // const [value, setValue] = useState(initialState);
  // -----
  // Set the default state as an empty string
  const [nameOfDish, setNameOfDish] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      {/* <Refactor /> */}
      <ToggleRefactored />
      <br/>
      <hr />
      <br/>
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(nameOfDish, setNameOfDish);
      }}>
      <label htmlFor="input">
        Input
      {/* NULL onChange as a placeholder */}
        <input name="input" type="text" onChange={(e) => setNameOfDish(e.target.value)} value={nameOfDish} autoComplete="off" />
      {/* Value typically state etc. or something e.g. this.state.value */}
        </label>
        <button>Submit</button>
      </form>
      <p>{nameOfDish}</p>

    </div>
  );
};

// pretend API call or sending data elsewhere or similar.
// instead we console.log as an example
// rename the value passed to the form submit to reuse it
const formSubmit = (value, setValue) => {
  console.log(`${`Email Sent To`} ${value}`);
  // By passing in setValue we set the value of the input (form) to a blank string after the form has been submitted
  setValue('');
}

export default App;
