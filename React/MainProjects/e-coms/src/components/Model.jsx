import React from 'react';
import classes from './Model.module.css'
import ReactDOM from 'react-dom'



const Backdrop = (props) => {
    return <div className={classes.Backdrop} onclick={props.hideHandler}/>;
};

const ModelOverlay = (props) => {
    return(
        <div className={classes.model} >
            <div className={classes.content} >{props.children}</div>

        </div>
    )
}

const portalElements = document.getElementById('overlays');
 
const Model = (props) => {
    return(
        <div>
            {ReactDOM.createPortal(
                <Backdrop hideHandler= {props.hideHandler}/>,
                portalElements
            )}
            {ReactDOM.createPortal(
                <ModelOverlay>{props.children} </ModelOverlay>,
                portalElements
            )}
        </div>
    )
}

export default Model;