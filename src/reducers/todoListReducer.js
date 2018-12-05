import { CREATE, UPDATE, DELETE, TOGGLE } from '../actions/actions';

let idCpt = 0;

export default function todoReducer( state = [], action){
    let newState;
    let idx = -1;
    switch(action.type){
        case CREATE:
            return [...state, {id:idCpt ++, text:action.payload, completed:false, doneAt:''} ];

        case UPDATE:
            idx = state.findIndex(elt => elt.id === action.payload.id);
            if(idx !== -1){
                newState = [...state];
                newState[idx] = action.payload;
            } else {
                return state;
            }
            return newState;            

        case DELETE:
            idx = state.findIndex(elt => elt.id === action.payload);
            if(idx !== -1){
                newState = [...state];
                newState.splice(idx,1);
            } else {
                return state;            
            }
            return newState;                

        case TOGGLE:
            idx = state.findIndex(elt => elt.id === action.payload);
            if(idx !== -1){
                newState = [...state];
                newState[idx].completed = !state[idx].completed;
            } else {
                return state;            
            }
            return newState;                

        default:
            return state;
    }
}