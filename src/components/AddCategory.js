import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    //const [inputValue, setInputValue] = useState(); // valor de estado = undefined! Por lo tanto marcara error de que un componente se esta cambiando inesperadamente
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {    
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats]); // Como no podemos accesar al categories usamos este tipo de salidas donde cats es el estado ultimo anterior
            setInputValue('');
        }

    }
    return (
        
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                ></input>
            </form>                                
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


