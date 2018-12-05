import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';
import filterReducer from './filterReducer';
import editModeReducer from './editModeReducer';
import idCounterReducer from './idCounterReducer';

export const rootReducer = combineReducers({
    todos: todoListReducer,
    filter: filterReducer,
    editMode: editModeReducer,
    idCounter: idCounterReducer
});