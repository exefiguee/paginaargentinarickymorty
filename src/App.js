import styles from './App.module.css';
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import Nav from './components/Nav';
import { useState } from 'react';

function App () {

  const [characters, setCharacters]=useState ( [  ]  )

 
  return (
   
    <div className={styles.contenedor}>   
       <Nav onSearch={onSearch}/>
    <div > 
      <Cards onClose={onClose} characters ={characters}/> 
      </div>
      </div>
  )

  
  function onSearch(id){
   if (characters.some(character => character.id === Number(id))){
      window.alert('ya esta en la lista');
    /*  fetch(`https://rickandmortyapi.com/api/character/${Number(id)}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });*/
   }else{   
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
     
   }

  }

  function onClose(id){
   setCharacters(    
   characters.filter(characters =>  characters.id !== id)   
   )
   console.log("hola");
  }

}


export default App
