import React, { useReducer } from 'react';

const initialState = {
  firstName: {
    value: '',
    error: null,
  },
  lastName: {
    value: '',
    error: null,
  },
  email: {
    value: '',
    error: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.value,
          error: validateField(action.field, action.value),
        },
      };
    default:
      return state;
  }
};

const validateField = (field, value) => {
  switch (field) {
    case 'firstName':
    case 'lastName':
      return value.length < 2 ? `${field} must be at least 2 characters.` : null;
    case 'email':
      // Simple email validation using regex
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return !emailRegex.test(value) ? 'Invalid email address.' : null;
    default:
      return null;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', field: name, value });
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={state.firstName.value}
            onChange={handleChange}
          />
          {state.firstName.error !== null && (
            <p className="error">{state.firstName.error}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={state.lastName.value}
            onChange={handleChange}
          />
          {state.lastName.error !== null && (
            <p className="error">{state.lastName.error}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email.value}
            onChange={handleChange}
          />
          {state.email.error !== null && (
            <p className="error">{state.email.error}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
