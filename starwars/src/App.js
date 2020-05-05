import React, {useState, useEffect}from 'react';
import axios from "axios"
import './App.css';
import setCharacters from "./components/Character"
import styled from "styled-components"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters ,setCharacters] = useState ([]);
  const CardBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 1px solid grey;
`;

const Header = styled.h1`
  font-family: "Codystar", cursive;
  color: black;
  font-size: 26px;
`;

const Subheading = styled.h3`
  font-family: "Press Start 2P", cursive;
  font-size: 16px;
  color: black;
`;




  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() => {
    const SET_URL = "https://swapi.py4e.com/api/people/?format=json";
    axios.get(SET_URL)
      .then(function (response) {
        setCharacters(response.data.results)
        console.log(response);
      })
      .catch (err => {
        console.log(err)
      });
  }, [])


  return (
    <div className="App">
      <h1 className="Header">"Darth Vader"</h1>
      <Container >
        {characters.map(characters => <Characters props={characters} />)}
      </Container>
    </div>
  );
}

export default App;
