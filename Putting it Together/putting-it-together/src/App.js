import React, { useState } from 'react';
import './App.css';

function App() {
  // Define a state variable for age
  const [age, setAge] = useState(25); // You can set an initial age here

  // Function to increase age by one
  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Birthday App</h1>
        <div>
          <p>Name: John Doe</p>
          <p>Age: {age}</p>
          <button onClick={increaseAge}>Increase Age</button>
        </div>
      </header>
    </div>
  );
}

export default App;

