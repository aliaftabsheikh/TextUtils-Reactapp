import React, { useState } from "react";

export default function TextForm(props) {
  // For Upper Case

  const handleUpClick = () => {
    setText("You have Clicked On handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase', 'success')
  };

  const handleUpchange = (event) => {
    setText(event.target.value);
  };
  //For Lower Case

  const handleDownClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert('Converted to LowerCase', 'success')
  };

  // For Remove Text

  const handleClearClick = () => {
    let newText1 = "";
    setText(newText1);
    props.showAlert('Text has been Removed', 'danger')
  };

  //For Copy Text

const handleCopyText = ()=>{
  var text = document.getElementById('myBox')
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert('Copy to Clipboard', 'success')
}

//For Remove Extra Space 

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert('All Extra space has been removed', 'success')


}

const capitalaize1 = ()=>{
  let lower = text.toLowerCase();
  setText (lower.charAt(0).toUpperCase() + lower.slice(1))
  props.showAlert('First Letter has been Capitalize', 'success')
}

  const [text, setText] = useState("");
  return (
    <>
      <div className = 'container' style ={{color : props.mode === 'dark'? 'white' : 'black'}}>
          <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
          style = {{backgroundColor : props.mode === 'dark'? 'black' : 'white', color : props.mode === 'dark'?'white':'black'}}
            className="form-control my-3"
            id="myBox"
            rows="8"
            onChange={handleUpchange}
            value={text}
          ></textarea>

          <button
            className="btn btn-outline-primary mx-1 my-2"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>

          <button
            className="btn btn-outline-danger mx-1"
            onClick={handleDownClick}
          >
            Convert to LowerCase
          </button>

          <button
            className="btn btn-outline-success mx-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>

          <button
            className="btn btn-outline-secondary my-2 mx-1"onClick={handleCopyText}>Copy to Clipboard
          </button>

          <button
            className="btn btn-outline-warning  mx-1"onClick={handleExtraSpaces}>Remove Extra Space
          </button>

          <button
            className="btn btn-outline-info  mx-1"onClick={capitalaize1}>Capitalize
          </button>
        </div>
      </div>

      <div className="container" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2>For Text Summary</h2>
        <p>
          {text.split(" ").length} <b>Words</b> and {text.length}{" "}
          <b>Characters</b>
        </p>
        <p>
          <b>Minutes Read </b> {0.008 * text.split(" ").length}
        </p>
        <h3>
          <b>Preview</b>
        </h3>
        <p>{text.length>0?text:" 'Enter Something in the TextBox above to preview it'"}</p>
      </div>
    </>
  );
}
