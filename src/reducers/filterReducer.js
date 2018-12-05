import { TOGGLE_FILTER } from '../actions/actions';

 export default function filterReducer(state = false, action){
     switch(action.type){
          case TOGGLE_FILTER:
            return !state;
          
          default:
            return state;
     }
 }
