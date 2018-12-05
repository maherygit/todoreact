import  { TOGGLE_EDIT_MODE } from '../actions/actions';

export default function editModeReducer(state = -1, action){
    switch(action.type){
        case TOGGLE_EDIT_MODE:
            return action.payload;
            
        default:
            return state;
    }
};