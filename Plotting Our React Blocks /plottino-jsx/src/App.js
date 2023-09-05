  import React from 'react';
  import './App.css';
  import Navigation from './components/Navigation';
  import Main from './components/Main';
  import SubContents from './components/SubContents';
  import Advertisement from './components/Advertisement';
  import Header from './components /Header';
  
                  
  function App() {
    return (
      <div className="app">
          <Header />
          <Navigation />
          <Main>
              <SubContents />
              <SubContents />
              <SubContents />
              <Advertisement />
          </Main>
      </div>
    );
  }
                  
  export default App;


