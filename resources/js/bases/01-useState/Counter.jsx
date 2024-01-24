import { useState } from "react";

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncremet = () => {setCounter(counter+1)}
    const handleIncremetBy10 = () => {setCounter(counter+10)}
    const handleDecrement = () => {setCounter(counter-1)}
    const handleReset = () => {setCounter(0)}

    return(
        <>
            <h1>Use State</h1> <hr />
            <div className="d-flex"> <h2>Valoooor: {counter}</h2> </div>
            <hr />
            <div className="d-flex">
                <button 
                    className="btn btn-danger mx-2"
                    onClick={ handleIncremet}
                > Sumar </button>
                <button 
                    className="btn btn-success mx-2"
                    onClick={handleDecrement}
                > Restar </button>
                <button 
                    className="btn btn-primary mx-2"
                    onClick={handleReset}    
                > Reset </button>
                <button
                    className="btn btn-info mx-2"
                    onClick={handleIncremetBy10}    
                > Sumar 10 </button>
            </div>
        </>
    );
}