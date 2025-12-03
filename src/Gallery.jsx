import React, { useState } from "react";

function Gallery(){
    var [images, setImages] = useState([
        "https://tse3.mm.bing.net/th/id/OIP.q7vMcx7iFcTzS2cbjc3QYQHaEz?pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th/id/OIP.E-QwfU6rZUm94e2j0G39_wHaEc?pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th/id/OIP.uKWMFn4rHgxVxmc4VVyW_wHaEo?pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th/id/OIP.WR14uvmFx-u2tec6XjSwzAHaEK?pid=Api&P=0&h=180",
        "https://cdn.hswstatic.com/gif/dubai-palm-island-1.jpg",
    ]);
    var[i, setI] = useState(0);
    function prevImg() {
        setI(i- 1);
    }
    function nextImg() {
        setI(i + 1);
    }
    return(
        <div className="border border-2 m-2 p-2 w-25">
            <h1>Gallery</h1>
            <img src={images[i]} alt="" className="w-100" />
            <button className="m-2"
            onClick={() => {
                prevImg();
            }}
            >
                Prev
            </button>
            <button className="m-2"
            onClick={() => {
                nextImg();
            }}
            >
                Next
            </button>
        </div>
    );
}

export default Gallery;