/**
 * Created by Nagaraj.ambig on 10/6/2016.
 */

import {createStore} from 'redux';
import undoableTodos from '../reducers/undoable-todos';


const store = createStore(undoableTodos);

export default store;