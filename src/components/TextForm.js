import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("praveen");

    const onClickUpperHandler = () => {
        const textUpper = text.toUpperCase();
        setText(textUpper);
    }

    const onClickLowerHandler = () => {
        const textUpper = text.toLowerCase();
        setText(textUpper);
    }

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-2 mt-3">
                <textarea style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="button" onClick={onClickUpperHandler} className="btn btn-primary">Convert to UpperCase</button>
            <button type="button" onClick={onClickLowerHandler} className="btn btn-primary m-2">Convert to Lowercase</button>
            <p style={{color: props.mode==='light'?'black':'white'}} className='mt-2'>{text.split(' ').length} words and {text.length} characters</p>
        </div>
    )
}
