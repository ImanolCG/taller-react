import PropTypes from 'prop-types';

export const ChildrenComponent = ({btnText}) => {
    return(
        <>
            <h1>Componente Hijo</h1>
            <button>{btnText}</button>
        </>
    );
}

ChildrenComponent.propTypes = {
    btnText: PropTypes.string.isRequired,
}