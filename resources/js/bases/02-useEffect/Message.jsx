import { useEffect, useState } from "react";

export const Message = () => {

    useEffect(() => {
        console.log("rederizando");

        return () => {
            console.log("al desrenderizar");
        }
    },[]);

    return(
        <>
            <h1>Me rendericé</h1>
        </>
    );

}