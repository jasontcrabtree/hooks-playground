# Hooks Playground

Contains code snippets / examples from Level Up Tuts Hooks Starter Tutorial

+ misc

Dave Ceddia <https://daveceddia.com/usestate-hook-examples/>

Dave Notes:

"In classes, the state is always an object, and you can store multiple values in that object.

But with hooks, the state can be any type you want – you can useState with an array, useState an object, a number, a boolean, a string, whatever you need. Each call to useState creates a single piece of state, holding a single value of any type."

"The “magic” here is that React maintains an object behind the scenes for each component, and in this persistent object, there’s an array of “state cells.” When you call useState, React stores that state in the next available cell, and increments the pointer (the array index)."

"You’ll notice we’re using the functional or “updater” form of setSteps here. We’re passing a function instead of a value."

"Another thing we’ve done here is write a standalone increment function, instead of inlining the arrow function on the button’s onClick prop. ...

Either way is fine. Sometimes the inline functions look messy and I’ll pull them out, and sometimes they’re succinct and I leave them inline."

## "Multiple calls to useState"

"If you want to store multiple values in a function component, you’ve got a couple options:

call useState more than once
shove everything into an object
There’s nothing wrong with calling useState multiple times, and in most cases, that’s how I store multiple values. Once you get over 4 or 5 useState calls it gets a bit unwieldy, but if you’re fine with it, React is too."

Login Form with Object State:
"The updateField function is where the real work happens. It calls setState and passes an object, but it must be sure to copy in the existing state with ...form if it doesn’t want to overwrite it. Try taking out the ...form line and see what happens."

## useReducer Hook

<https://daveceddia.com/usereducer-hook-examples/>

"In this post we’re looking at the useReducer hook. It’s great for managing more complicated state than you would want to manage with useState on its own."

"A “reducer” is a fancy word for a function that takes 2 values and returns 1 value."

"If you have an array of things, and you want to combine those things into a single value, the “functional programming” way to do that is to use Array’s reduce function."

`let numbers = [1, 2, 3];
let sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);`

I spent half a page explaining Array’s reduce function because, well, useReducer takes the same arguments, and basically works the same way.

`useReducer((state, action) => {
  return state + action;
}, 0);`

"The useRef hook allows you to create a persistent ref to a DOM node, or really to any value. React will persist this value between re-renders (between calls to your component function)."
