import { createStore, applyMiddleware } from 'redux'
import { State, reducer, initialState } from '../reducers/todo'


export default createStore(reducer, initialState);

