import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Fab } from '@material-ui/core';

function Note(props){
    function handleClick(){
        props.onDone(props.id);
    }
    return <div 
        className="note">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <Fab onClick={handleClick}>
            <DeleteIcon />
        </Fab>

        </div>;
}

export default Note