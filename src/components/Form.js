import { useState } from "react"


const Form = (props) =>{
    const [text, setText] = useState("");

    const handleUpClick = () =>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () =>{
        setText("");
        props.showAlert("Cleared", "success");
    }
    const handleChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopyClick = () =>{
        let copied = document.getElementById("myBox");
        copied.select();
        navigator.clipboard.writeText(copied.value);
        props.showAlert("Copied", "success");
    }

    const countWords = () =>{
        let arr = [];
        text.split(" ").map((item) => {
           if(item !== ""){
                arr.push(item);
           }
           return arr;
        })
        return arr.length;
    }


    return(
        <div className={`text-${props.mode !== "light" ? ("light") : ("dark")}`}>
            <div className="container">
               
                <h1>TEXT AREA</h1>
                
                <div className="mb-3">
                
                {/* <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? ("dark"):("light")}`}  */}
                {/* id="myBox" value={text} onChange={handleChange} rows="8"></textarea> */}
                <textarea className={`form-control bg-${props.mode} text-${props.mode !== "light" ? ("light") : ("dark")}`} 
                
                id="myBox" value={text} onChange={handleChange} rows="8"></textarea>

                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>

            </div>
            
            <div className="container my-3">
                <h1 >Words summary</h1>
                <p>{countWords()} words and {text.length} characters</p>
            </div>
            <div className="container my-2">
                <p>Minutes to read {0.008 * countWords()}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Play with the text area to preview it here"}</p>
            </div>

        </div>
    )
}

export default Form;