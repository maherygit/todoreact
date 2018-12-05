import Editeur from '../components/Editeur';
import { updateTodoAction, toggleEditModeAction } from '../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    let editedTodo={};
    if(state.editMode !== -1){
        editedTodo = (state.todos.filter(elt => elt.id === state.editMode))[0]
    }
    return { 
        todo: editedTodo
    };
};

const mapDispatchToProps = dispatch => {
    return  {
        onModify: newTodo => {
            dispatch(updateTodoAction(newTodo));
            dispatch(toggleEditModeAction(-1));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Editeur);