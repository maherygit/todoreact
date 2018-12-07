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

function randomTodo(idTodo) {
    let rndActions = rndItem(ACTIONS) ;
    let rndObjects = rndItem(OBJECTS) ;
    let newTodo = {id:idTodo, text:`${rndActions} ${rndObjects}`, completed: false, doneAt:"" };
    return newTodo;
}

function handleAjout(idCounter, textField, dispatcher){
    dispatcher({
        id: idCounter,
        text: textField.value,
        completed: false,
        doneAt: ""
    });
    textField.value = '';
}

const Ajouteur = ({idCounter, onHandleAjout}) => {
    let textField = null;

    return (
        <div id="ajouteur_container">
            <input id="ajouteur_texte" type="text" placeholder="entrer votre todo" ref={node => textField = node}/>
            <button id="ajouteur_btn" onClick={() => handleAjout(idCounter, textField, onHandleAjout)}>Ajouter</button>
            <button id="ajouteur_rnd_btn" onClick={() => onHandleAjout(randomTodo(idCounter))}>Au hasard!</button>
        </div>
    );
};

export default Ajouteur;

Ajouteur.propTypes = {
    onHandleAjout: PropTypes.func
}
