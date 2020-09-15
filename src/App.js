import React from 'react';
import './App.scss';
import Navigation from './components/nav/nav.jsx';
import Table from './components/data/data.jsx';
import Header from './components/header/header.jsx'

function App() {
  let data = [
  	{id: 1, name: 'Alexander', surname: 'Yasenowsky', degree:'High'},
  	{id: 2, name: 'Andrew', surname: 'Mokrushin', degree:'High'},
  	{id: 3, name: 'Nikita', surname: 'Yazikov', degree:'High'}
  ]

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Navigation data = {data}/>
        <Table />
      </div>
    </div>
  );
}

export default App;
