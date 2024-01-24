import { useState } from "react";

export const Form = () => {

    const [search, setSearch] = useState('');

    const hadleSubmit = (e) => {
        e.preventDefault();
        // setSearch(e.target.search.value);
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    if (search=='busqueda') setSearch('-busqueda-');


    return(
        <>
            <h5>Form</h5>
            <hr />
            <form className="m-4" onSubmit={hadleSubmit}>
                <input  type='text' name='search' 
                        placeholder='Search' autoComplete="off" 
                        value={search}
                        onChange={handleInputChange}
                ></input>
                <button className="btn btn-primary mx-2" type="submit">Buscar</button>
            </form>
            <p>busqueda: {search}</p>
        </>
    );

}