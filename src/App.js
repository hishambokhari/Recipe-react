import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = "9dd303fa";
  const APP_KEY = "93c43161405cc7991cf5f34b08706212";


  useEffect( () =>{
    getRecipes();
  }, []);

  const getRecipes = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);

  }
 

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
