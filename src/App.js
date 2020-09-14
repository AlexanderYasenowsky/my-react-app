import React from 'react';
import './App.css';
import Navigation from './components/nav.js'
import Table from './components/table.js'
function App() {
  let data = [
  	{id: 1, name: 'Alexander', surname: 'Yasenowsky', degree:'High'},
  	{id: 2, name: 'Andrew', surname: 'Mokrushin', degree:'High'},
  	{id: 3, name: 'Nikita', surname: 'Yazikov', degree:'High'}
  ]

  return (
    <div className="App">
        <Navigation />
        <Table />
    </div>
  );
}

export default App;
