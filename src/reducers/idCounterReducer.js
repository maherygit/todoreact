import  { CREATE, SET_ID_COUNTER } from '../actions/actions';

export default function(state = 0, action){
    switch(action.type){
        // lors de la création d'un TODO
        case CREATE:
        return ++state;

        case SET_ID_COUNTER:
        return action.payload;
        
        default:
        return state;
    }
}