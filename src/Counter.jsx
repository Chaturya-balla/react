import React from "react";
function Counter(){
    var[c,setC] = React.useState(0);

     function inc(){
        setC(c + 1);
     }
     function dec(){
        setC(c - 1);
     }
     return(
        <div>
            <h1>Counter: {c}</h1>
            <button onClick={() => {
                inc();
            }}
            >
                Inc
            </button>
            <button onClick={() => {
                dec();
            }}
            >
                Dec
            </button>
        </div>
     );
}

export default Counter;