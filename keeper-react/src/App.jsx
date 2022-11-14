import React, { useState } from "react"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Note from "./components/Note.jsx"
import CreateArea from "./components/CreateArea.jsx"




function App(){

    const [notes,setNotes] = useState([])

    function addNote(note){
         console.log(note.title);

         setNotes(prevNotes => {
            note.key=prevNotes.length;
            return [...prevNotes,note]
         })
    }

    function removeNote(key){
        console.log(key);
        setNotes(prevNotes => {
            return prevNotes.filter(function(value, index, arr){
                console.log(value.key)
                return value.key != key;
            })
        })
    }

    
    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map( note => {
            return < Note
                onDone={removeNote} 
                key={note.key}
                id={note.key}
                heading={note.title}
                text={note.content}
            />
        })}   
        <Footer />
    </div>;
}

export default App