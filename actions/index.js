/**
 * Created by Nagaraj.ambig on 10/6/2016.
 */

import {ADD_TEXT, DO_UNDO, DO_REDO} from '../constants/action-types';
let nextTodoId = 0
export function addText(text) {
    return {
        type: ADD_TEXT,
        id: nextTodoId++,
        text
    };
}

export function doUndo() {
    return {
        type: DO_UNDO
    }
}

export function doRedo() {
    return {
        type: DO_REDO
    }
}

