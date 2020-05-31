import React from 'react';
import logo from './logo.svg';
import Products from './components/products/products';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
           Pizza Restaurant
        </h2>
        
      </header>
    </div>
    <div className="jumbotron">
    <Products />
    </div>
   </>
  );
}

export default App;
