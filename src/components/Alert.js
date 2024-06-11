import React from "react";
// import {useState} from "react";

const Alert = (props) =>{
    const Capatilize = (word) =>{
        let first = word.charAt(0).toUpperCase();
        let second = word.slice(1);
        return  first + second;
    }
    return(
    /* In this we are using && operators which defines here that if props.alert === true
    then execute the code after && but if it's not just execute the current value of props.alert
    which is null or false */
    /* And yes there is no need to wrap the whole code inside {} cause it is neccessary to wrap it 
    when writing js in between HTML code*/
    props.alert  &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/*If alert is a success display it's type  */}
        <strong>{Capatilize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
    );
}

export default Alert;