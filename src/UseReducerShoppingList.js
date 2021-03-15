import React, { useReducer, useRef } from 'react';

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // do something with the reducer
      /*
            When the reducer gets the “add” action, it returns a new array that includes all the old elements, plus the new one at the end.
            */
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      /*
            Keep every item except the one we want to remove
            */
      case 'remove':
        return state.filter((_, index) => index !== action.index);
      case 'clear':
        return [];
      default:
        return state;
    }
  }, []);

  /*
    The handleSubmit function is called when the user presses Enter in the input box, and we need to call preventDefault to avoid a full page reload. Then it calls dispatch with an action. We’re also clearing out the input.
    */
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value,
    });
    inputRef.current.value = '';
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">
          Add to List
          <br />
          {/* inputRef creates a persistent reference to a DOM node (in this case, our input). React then persists the value between re-renders */}
          <input name="input" ref={inputRef} autoComplete="off" />
        </label>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              type="button"
              onClick={() => dispatch({ type: 'remove', index })}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={(index) => dispatch({ type: 'clear', index })}
      >
        Clear List
      </button>
    </div>
  );
}

export default ShoppingList;
