import { useState } from "react";
import { Message } from "./Message";

export const EffectCleanUp = () => {

    const [showComponent, setShowComponent] = useState(false);

    const handleChangeFlag = () => {
        setShowComponent(prev => !prev);
    };

    return(
        <>
            <h3>Effect Clean Up</h3>
            <hr />
            <h3>
                Componente:{' '}
                {showComponent === false ? 'Componente Desmontado' : 'Componente Montado'}
            </h3>
            <br />

            {showComponent && <Message />}

            <br />
            <button className="btn btn-primary" onClick={handleChangeFlag}>{showComponent === false ? 'Montar' : 'Desmontar'}</button>
        </>
    );

}