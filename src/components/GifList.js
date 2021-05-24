import React from "react";
function GifList({ imageData }) {

    return <ul>
        {imageData.map((e) =>(
        <li key={e.images.original.url}>
            <img alt="Gif" src={e.images.original.url} />
        </li>))}
    </ul>
}


export default GifList

