import React, { Component } from 'react'
import './App.css'
import Main from './Main.js' 

class App extends Component {
  constructor(){
    super()
    this.state ={
    notes: {
    'note-4': {
      id: 'note-4',
      title: 'From App state',
      body: 'Oh so fancy!',
    },
    'note-5':{
      id: 'note-5',
      title: 'Another fancy note',
      body: 'very fancy!',
    },
  }
    }
  }
  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes}/>
      </div>
    )
  }
}

export default App;
