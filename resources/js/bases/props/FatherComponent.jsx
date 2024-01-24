import { ChildrenComponent } from "./ChildrenComponent";

export const FatherComponent = () => {
    return(
        <>
            <h1>Componente Padre</h1>
            <ChildrenComponent btnText={'prop-validation'}/>
        </>
    );
}