import React from 'react';
import './App.scss';
import Table from './components/data/data.jsx';
import Header from './components/header/header.jsx'
import Navigation from './components/navigation/navigation.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      type: 0
    }
  }

  getData = () =>{
    this.setState({
      data: [1,2,3],
      type: 1
    })
  }
  return =()=>{
    this.setState({
      data:[],
      type: 0
    })
  }

  render(){
    return(
    <div className="App">
      <Header/>
      <Navigation type={this.state.type} 
                  getData ={this.getData}
                  return = {this.return}/>
      <Table data ={this.state.data}/>
    </div>
    )
  }
}

export default App;
