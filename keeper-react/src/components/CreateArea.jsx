import React, { useState } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Fab } from '@material-ui/core';
import { Zoom } from '@material-ui/core';


function CreateArea(props){

    const [note,setNote] = useState({
        title: "",
        content: ""
    })
    
    const [buttonHover,setButtonHover]=useState(false);
    const [minimized, setMinimized]=useState(true);

    
    function submitNote() {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""});
        setMinimized(true);
    }

    function handleNoteClick(){
        setMinimized(false);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }


    return (
        <div>
            <form className="create-note"  onSubmit={(event)=>{event.preventDefault();}}>
                <input 
                    name="title" 
                    placeholder="Title" 
                    onChange={handleChange} 
                    value={note.title}
                    hidden={minimized}    
                    />
                <textarea 
                    onClick={handleNoteClick}
                    name="content" 
                    placeholder="Take a note" 
                    onChange={handleChange}
                    rows={minimized?"1":"3"} 
                    value={note.content}   
                    />
                    <Zoom in={!minimized}>
                <Fab
                    onMouseEnter={() => {setButtonHover(true);}}
                    onMouseLeave={() => {setButtonHover(false);}}
                    style={{
                        color: buttonHover ? "gray" : 'white'
                    }}
                    onClick={submitNote}><AddCircleOutlineIcon /></Fab></Zoom>
            </form>
        </div>
    )

}//

export default CreateArea