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
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-3" onClick={handleupclick}>Convert to UpperCase</button>
            <button className="btn btn-success  mx-2" onClick={handlelowclick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={handleclearclick}>Clear the Text</button>

            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h3>Your Text Summary</h3>
                <p> {text.split(" ").length - '1'} words {text.length} Character</p>
                <p> {0.008 * text.split(" ").length} Minute read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to textBox above to preview it here"}</p>
            </div>
        </div>
        </>
    )
}
