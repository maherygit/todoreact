import TodoList from '../components/TodoList';
import { deleteTodoAction, toggleTodoAction, toggleEditModeAction } from '../actions/actions';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        todos: state.todos.filter( elt => {
            // show all : state.filter == true
            if((state.filter === true) && (elt.completed === true)){
                return true;
            } else if(state.filter === false){
            // show only uncompleted : state.filter == false and elt.completed == false                
                if(elt.completed === true){
                    return false;
                } else {
                    return true;
                }
            }
            return true; 
        })
    };
};

const mapDispatchToProp = dispatch => {
    return {
        onHandleToggle : id => dispatch(
            toggleTodoAction(id)
        ),
        onHandleEdit : id => dispatch(
            toggleEditModeAction(id)
        ),
        onHandleDelete : id => dispatch(
            deleteTodoAction(id)
        ),
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(TodoList);
