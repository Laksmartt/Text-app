import React, { useState } from "react";
import PropTypes from 'prop-types'


const Navbar = ({textUtils, aboutTextUtils, mode, handleMode}) =>{
    const [verify, setVerify] = useState("light");
    const handleOneMode = (item) =>{
            if(item !== verify){
                handleMode(item);
                setVerify(item);
            }else{
                handleMode("light");
                setVerify("light");
            }
    }
    return(
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="#">{textUtils}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{aboutTextUtils}</a>
                </li>
                </ul>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                onClick={() => handleOneMode("success")} 
                disabled = {verify === "light" ? 
                    false : 
                    verify === "success" ? (false) : (true)}/>
                <label className={`form-check-label text-${mode !== "success" ? ("success") : ("light")}`} 
                htmlFor="flexSwitchCheckChecked">{mode !== "success" ? ("Green") : ("Light")}</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                onClick={() => handleOneMode("primary")}
                disabled = {verify === "light" ? 
                    false : 
                    verify === "primary" ? (false) : (true)}/>
                <label className={`form-check-label text-${mode !== "primary" ? ("primary") : ("light")}`} 
                htmlFor="flexSwitchCheckChecked">{mode !== "primary" ? ("Blue") : ("Light")}</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                onClick={() => handleOneMode("danger")}  
                disabled = {verify === "light" ? 
                    false : 
                    verify === "danger" ? (false) : (true)}/>
                <label className={`form-check-label text-${mode !== "danger" ? ("danger") : ("light")}`} 
                htmlFor="flexSwitchCheckChecked">{mode !== "danger" ? ("Red") : ("Light")}</label>
            </div>
            <div className="form-check form-switch mx-2">
                <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                onClick={() => handleOneMode("dark")} 
                disabled = {verify === "light" ? 
                    false : 
                    verify === "dark" ? (false) : (true)}/>
                <label className={`form-check-label text-${mode !== "dark" ? ("dark") : ("light")}`} 
                htmlFor="flexSwitchCheckChecked">{mode !== "dark" ? ("Dark") : ("Light")}</label>
            </div>
            </div>
           

            </nav>
        </div>
    )
}
export default Navbar;

/* Proptypes specify the type of received prop 
It is necessary to define prop type cause if there is
an error related to prop type like u sent a number but intented
to send a string, Proptype will catch it instantly */

/*
Navbar.propTypes = {
    textUtils: PropTypes.string,
    aboutTextUtils: PropTypes.string
} 
*/

// But if u forget to send the whole prop 

Navbar.propTypes = {
    textUtils: PropTypes.string.isRequired,
    aboutTextUtils: PropTypes.string.isRequired
} 

/* isRequired make sure that u send the prop u wish to send */

// and for backup we can use default props

Navbar.defaultProps = {
    textUtils: "text",
    aboutTextUtils: "Contact Us"
}
