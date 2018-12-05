import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, text, completed, doneAt, onToggle, onEdit, onDelete }) => {
    return (
        <div className="todo_item">
            <label className="label_container">
                <input className="todo_item_check" type="checkbox" onChange={() => onToggle(id)} checked={completed}/>
                <span className="checkmark"></span>
            </label>
            <span className="todo_item_description" onClick={() => onEdit(id)}>
                <span className="todo_item_description_text">
                    {text}
                </span>
                {(doneAt) && (<span className="todo_item_description_date">
                    <em>fait le : {doneAt}</em>
                </span>)}
            </span>
            <button className="todo_item_delete" onClick={() => onDelete(id)}>X</button>
        </div>
    );
};


export default Todo;

Todo.propTypes = {
    text : PropTypes.string,
    doneAt : PropTypes.string,
    completed : PropTypes.bool,    
    onToggle : PropTypes.func,
    onEdit : PropTypes.func,
    onDelete : PropTypes.func
};