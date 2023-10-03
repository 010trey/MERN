
import './App.css';
import PersonCard from './components/PersonCard';

const datas=[
  {
    firstName : "Doe",
    lastName : "Jane",
    age : 45,
    hairColor : "Black"
  },
  {
    firstName : "Smith",
    lastName : "John",
    age : 88,
    hairColor : "Brown"
  },
  {
    firstName : "Fillmore",
    lastName : "Millard",
    age : 50,
    hairColor : "Brown"
  },  
  {
    firstName : "Smith",
    lastName : "Maria",
    age : 62,
    hairColor : "Brown"
  }
]

function App() {
  return (
    <div className="App">
      {datas.map( function(data, i){
        return <PersonCard firstName={data.firstName} lastName={data.lastName} age={data.age} hairColor={data.hairColor}/>
      })}
    </div>
  );
}

export default App;
