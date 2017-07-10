import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = (props) =>{
  const noteIDs = Object.keys(props.notes)
    return (        
      <div className="NoteList">
        <h3>Notes</h3>
          <ul id="notes">
            {noteIDs.map(noteID=> 
              <Note 
                key={noteID}
                note={props.notes[noteID]} 
                setCurrentNote = {props.setCurrentNote}/> 
            )}}
          </ul>
      </div>
    )
}
export default NoteList