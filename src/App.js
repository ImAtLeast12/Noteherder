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
  },
      currentNote: this.blankNote(),
    }
  }

  blankNote=()=>{
    return{
        id: null,
        title: '',
        body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({currentNote:note})
  }
  
  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  render() {
    const actions ={
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
    }
    return (
      <div className="App">
        <Main 
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          {...actions}
          />
      </div>
    )
  }
}

export default App;
