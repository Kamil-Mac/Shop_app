import React from 'react';
import reactDom from 'react-dom';
import classes from './Modal.module.css';



const Backdrop = (props) => {
    return (
        <div onClick={props.onHideCart} className={classes.backdrop}></div>
    );
};

const Modaloverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {

    return (
        <React.Fragment>
            {reactDom.createPortal(<Backdrop onHideCart={props.onHideCart}/>, document.getElementById("backdrop"))}
            {reactDom.createPortal(<Modaloverlay>{props.children}</Modaloverlay>, document.getElementById("overlays"))}
        </React.Fragment>
    );
};

export default Modal;