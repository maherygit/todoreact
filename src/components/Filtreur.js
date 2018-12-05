import React from 'react';
import PropTypes from 'prop-types';

const Filtreur = ({ filterOn, onHandleFilterToggle }) => {
    return (
        <div id="filtreur_container">
            <label className="label_container">
                <input id="filtreur_check" type="checkbox" checked={filterOn} onChange={() => onHandleFilterToggle(filterOn)}/>
                <span className="checkmark"></span>
            </label>
        </div>
    );
};

export default Filtreur;

Filtreur.propTypes = {
    filterOn : PropTypes.bool,
    onHandleFilterToggle : PropTypes.func
}