import { useState } from "react";

export const MultipleCounter = () => {

    const [counters, setCounter] = useState({
        counter1: 10,
        counter2: 10,
        counter3: 10,
    });

    const {counter1, counter2, counter3} = counters;

    const handleCounters = (counterName, value) =>{
        setCounter(prev => ({...prev, [counterName]: value}));
    }

    return(
        <>
            <h3>Multiple Counter</h3>
            <hr></hr>

            <h4>Counters</h4>

            <div>
                <h5>Counter 1: {counter1}</h5>
                <h5>Counter 2: {counter2}</h5>
                <h5>Counter 3: {counter3}</h5>
            </div>

            <div className="mt-3">
                <button className="btn btn-info mx-1" onClick={()=>handleCounters('counter1', counter1+1)}>counter 1</button>
                <button className="btn btn-info mx-1" onClick={()=>handleCounters('counter2', counter2+1)}>counter 2</button>
                <button className="btn btn-info mx-1" onClick={()=>handleCounters('counter3', counter3+1)}>counter 3</button>
            </div>
        </>
    );

}