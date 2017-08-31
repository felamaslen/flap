import { createReducer } from 'redux-create-reducer';

import { } from '../actions';

import { } from './app.reducer';

import initialReduction from '../lib/reduction';

function createReducerObject(array) {
    return array.reduce((last, item) => {
        last[item[0]] = (appState, action) => item[1](appState, action.payload);

        return last;
    }, {});
}

// map actions to reducers
const reducers = createReducerObject([
]);

export default createReducer(initialReduction, reducers);

