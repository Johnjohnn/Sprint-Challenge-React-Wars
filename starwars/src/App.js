import React, {useState, useEffect}from 'react';
import './App.css';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [page, setPage] = useState (1);
  const [results, setResults] = useState ([]);
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
    axios.get(`https://swapi.py4e.com/api/planets/1/`)
      .then(response => {
        console.log(response);
        setResults(response.data.results);
        
      })
      .catch (err => {
        console.log(err)
      });
  }, [])


  return (
    <div className="App">
      <h1 className="Header">"Darth Vader"</h1>
    </div>
  );
}

export default App;
