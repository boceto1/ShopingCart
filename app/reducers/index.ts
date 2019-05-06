import { combineReducers } from 'redux'
import { State, reducer } from './cart'

export default combineReducers<{ carts: State }>({
    carts: reducer
})