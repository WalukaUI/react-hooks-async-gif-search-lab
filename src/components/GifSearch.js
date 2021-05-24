import React, { useState } from "react";


function Gifsearch({ GifListContainer }) {
    const [inputVal, setInputVal] = useState("")

    function searchfunstion(e) {
        e.preventDefault()
        GifListContainer(inputVal)
        setInputVal("")
    }
    function oninputChange(event) {
        setInputVal(event.target.value)
    }
    return <form onSubmit={searchfunstion}>
        <label>Enter a Search Tearm</label>
        <input
            value={inputVal}
            type="text"
            onChange={oninputChange}
        />
        <button type="submit">Find Gifs</button>
    </form>
}

export default Gifsearch