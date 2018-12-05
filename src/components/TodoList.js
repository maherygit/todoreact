import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onHandleToggle, onHandleEdit, onHandleDelete }) => {
    return (
      <div id="TodoList">
        {todos.map( todo => 
            <Todo key = {todo.id}
                  id = {todo.id}
                  text = {todo.text}
                  completed = {todo.completed}
                  doneAt = {todo.doneAt}
                  onToggle = {onHandleToggle}
                  onEdit = {onHandleEdit}
                  onDelete = {onHandleDelete}
            />
        )}
      </div>);
}

export default TodoList;


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text : PropTypes.string,
            doneAt : PropTypes.string,
            completed : PropTypes.bool,
            onToggle : PropTypes.func,
            onEdit : PropTypes.func,
            onDelete : PropTypes.func}
        )
    ), 
    filterOn: PropTypes.bool,
    onHandleToggle: PropTypes.func,
    onHandleEdit: PropTypes.func,
    onHandleDelete: PropTypes.func
}