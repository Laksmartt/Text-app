import React from 'react'

const AboutUs = () =>{
    return(
        <div>
            <h1>About Us</h1>
            <p>Text Operations makes people life easier by introducing new inentions related
                to tech which are being utilised in our daily life
            </p>
            <br/>
            <label htmlFor='dropDownOne'>Contact US </label>
            <select id='dropDownOne'>
                <option id="two">
                    <p>Telephone = 99090909019</p>
                </option>
                <option id="three">
                    <a href='opop45@gmail.com'>Email</a>
                </option>
            </select>
        </div>
    )
}

export default AboutUs;