import React,{ useEffect, useState } from "react"
import GifList from './GifList'
import Gifsearch from './GifSearch'

function GifListContainer() {

    const [apidata, setApiData] = useState([])
    const [inputValue,setInputValue]=useState("cricket")

    const link=`https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=ORcCi7aqTA4c3f4LSeS0daqwETGuW5tb&rating=g`
    
    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(json => slicer(json))
    },[inputValue])

    function slicer(e) {
        const slicedData = e.data.slice(0, 3)
        console.log(slicedData)
        setApiData(slicedData)
        
    }

    return (
        <>
            <Gifsearch   GifListContainer={setInputValue}/>
            <GifList imageData={apidata} /> 
        </>)

}

export default GifListContainer