import { combineReducers } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
    user: userReducer,
    middleware: applyMiddleware(ReduxThunk),
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;