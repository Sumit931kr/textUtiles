import React, { useState } from 'react'


export default function TextForm(props) {



    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handlelowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleclearclick = () => {
        let newtext = '';
        setText(newtext);
    }

    const handleonchange = (event) => {
        console.log("handle on Change was clicked");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    //  text = "new Line " ;  // Wrong way to Chenge the State
    // setText("New Line") // Correct way to change the State


    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-3" onClick={handleupclick}>Convert to UpperCase</button>
            <button className="btn btn-success  mx-2" onClick={handlelowclick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={handleclearclick}>Clear the Text</button>

            <div className="container">
                <h3>Your Text Summary</h3>
                <p> {text.split(" ").length} words {text.length} Character</p>
                <p> {0.008 * text.split(" ").length} Minute read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
