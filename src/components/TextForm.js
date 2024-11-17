import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("praveen");

    const onClickHandler = () => {
        const textUpper = text.toUpperCase();
        setText(textUpper);
    }

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-2 mt-3">
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="button" onClick={onClickHandler} className="btn btn-primary">Convert to UpperCase</button>
        </div>
    )
}
