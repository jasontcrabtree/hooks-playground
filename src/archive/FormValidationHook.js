/* eslint-disable guard-for-in */
/*
https://felixgerschau.com/react-hooks-form-validation-typescript/

### Adding validations
There are many ways to specify the validation rules for our form attributes. The three ways that would allow for the greatest flexibility are the following:

- Required: Marks an attribute as required and throws a validation error if it is missing.
- Pattern: This allows you to specify a regular expression that the attribute must match to be considered valid.
- Custom: A custom function that accepts the value as a parameter and which returns a boolean. If it returns true, the field is valid.

I've decided to store them in an object where the key refers to the attribute's name and the value contains the validation.
*/

import { useState } from 'react';

export const UseFormValidationHook = (options) => {
  // we use useState to manage the state of our form
  // we set the default state to options.initialValues if present (optional chaining) or an empty object
  const [data, setData] = useState(options?.initialValues || {});

  // To accomodate form error validation, we need to create a new state variable with useState that return the errors to access them outside the hook
  const [errors, setErrors] = useState({});

  // handleChange manages the change events for our inputs. We tell the function which attribute to manage via the key argument. We optionally pass down a function for sanitizing the value
  // handleChange then returns a function that uses React event to update form state
  const handleFormChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({ ...data, [key]: value });
  };

  /* We also handle the form submission via onSubmit, whhich the hook is initialized with */
  /* We add logic to validate the keys in our handleSubmit function
  (Author prefers forms to validate on submission, not onBlur/while typing)
  */
  async function handleFormSubmit(e) {
    e.preventDefault();
    const validations = options?.validations;

    if (validations) {
      const valid = true;
      const newErrors = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          // valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          // valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          // valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  }
  // We need to call e.preventDefault() because it prevents the default page reload on submit - an HTML feature

  /* At the end, we return each function to use in our components */
  return { data, handleFormChange, handleFormSubmit, errors };
};

/*
### Validating the data
1st step to validate the form data = check if the hook has been initilized with a validations object

e.g.
if (validations) {
  // ... run our validations
}

2nd Step: iterate over the values of the validations object (that contains our requirements for each input)

For each key of the object, check if validations exist, if they do, run agains tcurrent value

3rd Step: Update the errors object with the data from newErrors if any of the before-mentioned validation rules have failed
if (!valid) {
  setErrors(newErrors);
  return;
  // the empty return statement prevents the handleSubmit function from submitting the form
}
*/
