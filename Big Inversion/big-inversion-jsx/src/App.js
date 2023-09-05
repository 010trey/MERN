import React from 'react';

// Functional component PersonCard
function PersonCard(props) {
  return (
    <div>
      <h2>
        {props.lastName}, {props.firstName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Jane"
        lastName="Smith"
        age={25}
        hairColor="Blonde"
      />
      <PersonCard
        firstName="Tom"
        lastName="Johnson"
        age={40}
        hairColor="Black"
      />
      <PersonCard
        firstName="Alice"
        lastName="Brown"
        age={28}
        hairColor="Red"
      />
    </div>
  );
}

export default App;
