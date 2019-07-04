import { combineReducers } from 'redux';

import notes from './notes';
import category from './category';

const appReducer = combineReducers({
    notes,
    category
})

export default appReducer;