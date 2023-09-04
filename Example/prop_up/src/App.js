import React from 'react';
import PersonCard from './components/PersonCard.jsx';
import './App.css'; // You can style the components using CSS

function App() { 
  return (
    <div className="App">
      <PersonCard firstName={"Doe"}
                  lastName={"Jane"}
                  age={45}
                  hairColor={"Black"}
      />
      <PersonCard firstName={"Smith"}
                  lastName={"John"}
                  age={88}
                  hairColor={"Brown"}
      />
      <PersonCard firstName={"FillMore"}
                  lastName={"Milliard"}
                  age={50}
                  hairColor={"Brown"}
      />
      <PersonCard firstName={"Smith"}
                  lastName={"Maria"}
                  age={62}
                  hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
