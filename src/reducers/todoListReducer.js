import { CREATE, UPDATE, DELETE, TOGGLE } from '../actions/actions';

let idCpt = 0;

export default function todoListReducer( state = [], action){
    let newState;
    let idx = -1;
    switch(action.type){
        case CREATE:
            return [...state, action.payload ];

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
                if(newState[idx].completed){
                    newState[idx].doneAt = (new Date()).toLocaleDateString();
                } else {
                    newState[idx].doneAt = "";
                }

            } else {
                return state;            
            }
            return newState;                

        default:
            return state;
    }
}