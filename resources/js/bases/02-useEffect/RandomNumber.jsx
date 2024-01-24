import { useEffect, useState } from "react";

export const RandomNumber = () => {

    const handleFetchRandomNumber = async () => {
        const url='https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';
        const response = await fetch(url);
        const data = await response.text(); // .text porque la url regresa un numero como '400'
        // console.log(data);
        // throw new Error('500 Internal Server Error');
        return +data // el + hace el cast de string a number en js
    }

    const [number, setNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState();

    useEffect(() => {
        console.log("rederizando");
        handleFetchRandomNumber().then(number => setNumber(number)).catch(error => setIsError(error.message));
        return () => {
            console.log("al dejar de renderizar");
        }
    },[]);

    useEffect(() => {
        if(number){setIsLoading(false)}
    },[number]); // number se agrega como dependencia, esto para inidicar que cada que se cambie el valor de number se ejecute el useEffect

    useEffect(() => {
        if(isError){setIsLoading(false)}
    },[isError]); 

    

    return(
        <>
            <h3>Random Number</h3>
            <hr />
            {isLoading ? <h3> Loading... </h3> : <h3> Numero: {number}</h3>}
            {!isLoading && isError && <h3> Error: {isError}</h3>}
            <br />
        </>
    );

}