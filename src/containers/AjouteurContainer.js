import { connect } from 'react-redux';
import Ajouteur from  '../components/Ajouteur';
import { createTodoAction } from '../actions/actions';


const mapDispatchToProps = dispatch => {
    return {
        onHandleAjout: newTodo => dispatch(
            createTodoAction(newTodo)
        )
    }
}


export default connect(null, mapDispatchToProps)(Ajouteur);
