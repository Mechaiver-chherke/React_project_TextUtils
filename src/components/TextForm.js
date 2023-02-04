
import React, { useState } from 'react'

export default function TextForm(props) {
    const [ text, setText] = useState('Enter Text Here');
       const handleUpClick = ()=>{
        if(text === ''){
            props.showAlert('Please Enter Text In Text Box', "success");
        }
        else{
       // console.log("Uppercase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success")
       }}
       const handleLowClick = ()=>{
        if(text === ''){
           
        }
        else{
       // console.log("Uppercase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase", "success")
       }}
       const handleOnChange = (event)=>{
       // console.log("on change")
        setText(event.target.value); 
       }
       const handleClearClick = ()=>{
        //console.log("Cleared Text ");
        
        setText("")
        props.showAlert("Text Cleared", "success")
       }
       const clearText = ()=>{
       if (text === 'Enter Text Here'){
        //console.log("Focous Cleared ");
        
        setText("")
        
       }}
       const handleCopy= ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copyed", "success")

       }
       const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Space", "success")
       }

  return (
   <>
   <div>
            <div className="mb-3"  style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} onFocus={clearText} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}rows="8" ></textarea>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-secondary" onClick={handleClearClick}>Cleared Text</button>
            </div>
    </div>
    <div className="conatiner my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
    <p>{0.008 * text.split(" ").length } Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p></div>
    </>
  )
}
