/**
 * Created by Nagaraj.ambig on 10/6/2016.
 */

import {ADD_TEXT, DO_UNDO, DO_REDO} from '../constants/action-types';
import undoable, {includeAction} from 'redux-undo'

const todo = (state, action) => {
    if (action.type == 'ADD_TEXT') {
        return {
            id: action.id,
            text: action.text
        }
    }
    return state;
}

const todos = (state = [], action) => {
    if (action.type == 'ADD_TEXT') {
        let state = state || {};
        return [...state, todo(undefined, action)];
    }
    return state;
}

const undoableTodos = undoable(todos, {
        filter: includeAction([ADD_TEXT]),
        limit: 20,
        debug: true,
        undoType: DO_UNDO,
        redoType: DO_REDO
    }
);

export default undoableTodos
