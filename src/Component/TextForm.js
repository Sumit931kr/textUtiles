import React, { useState } from 'react'

export default function TextForm(props) {


    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted into UpperCase", "success")
    }

    const handlelowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted into LowerCase", "success")
    }

    const handleclearclick = () => {
        let newtext = '';
        setText(newtext);
        props.showalert("Text is Cleared", "success")
    }

    const handlecopyclick = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text Copied on CLipboard", 'success');

    }

    const handleExtraspaceclick = () => {
        let newtext = text.split(/[]+/);
        setText(newtext.join(" "));
        props.showalert("Extra Spaces is removed", "success")
    }



    const handleonchange = (event) => {
        console.log("handle on Change was clicked");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    //  text = "new Line " ;  // Wrong way to Chenge the State
    // setText("New Line") // Correct way to change the State


    return (
        <>
        <div className="conatiner" >
            <h3 style={{color: props.mode === 'dark'?'white':'black'}}>Enter the Text to Analyze</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark'?'rgb(105 87 255)':'white',color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="7"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleupclick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-success  mx-2" onClick={handlelowclick}>Convert to LowerCase</button>
            <button  disabled={text.length===0} className="btn btn-danger mx-2" onClick={handleclearclick}>Clear the Text</button>
            <button  disabled={text.length===0} className="btn btn-warning mx-2" onClick={handlecopyclick}>Copy the Text</button>
            <button  disabled={text.length===0} className="btn btn-info mx-2" onClick={handleExtraspaceclick}>Remove the extra space</button>

            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h3>Your Text Summary</h3>
                <p> {text.split(" ").filter((element)=>{return element.length!==0}).length } words {text.length} Character</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview Here"}</p>
            </div>
        </div>
        </>
    )
}
