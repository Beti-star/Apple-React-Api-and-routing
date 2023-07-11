import React from 'react'
import { useState, useEffect } from 'react';
function Random() {
  
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJokes([data]));
  }, []);

  console.log(jokes);

  return (
    <div className="App">
      {jokes.map((joke) => (
        <h2 key={joke.id}>Joke: {joke.value}</h2>
      ))}
    </div>
  );
}



export default Random