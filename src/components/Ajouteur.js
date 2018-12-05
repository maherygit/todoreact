import React from 'react';
import PropTypes from 'prop-types';

const ACTIONS = [
    'eat',
    'sleep',
    'sell',
    'buy',
    'destroy',
    'throw',
    'bury',
];

const OBJECTS = [
    'the banana',
    'the dog',
    'a fireman',
    'a dancing guy',
    'Station F',
    'the coffin',
];

function rndItem(tabTitem){
    return tabTitem[Math.round(Math.random()*tabTitem.length)%tabTitem.length];
}

function randomTodo() {
    let rndActions = rndItem(ACTIONS) ;
    let rndObjects = rndItem(OBJECTS) ;
    return `${rndActions} ${rndObjects}`;
}

function handleAjout(textField, onHandleAjout){
    onHandleAjout(textField.value);
    textField.value = '';
}

const Ajouteur = ({onHandleAjout}) => {
    let textField = null;


    return (
        <div id="ajouteur_container">
            <input id="ajouteur_texte" type="text" placeholder="entrer votre todo" ref={node => textField = node}/>
            <button id="ajouteur_btn" onClick={() => handleAjout(textField, onHandleAjout)}>Ajouter</button>
            <button id="ajouteur_rnd_btn" onClick={() => onHandleAjout(randomTodo())}>Au hasard!</button>
        </div>
    );
};

export default Ajouteur;

Ajouteur.propTypes = {
    onHandleAjout: PropTypes.func
}
