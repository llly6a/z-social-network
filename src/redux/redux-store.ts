import { applyMiddleware, combineReducers, compose, createStore, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});


//let store = createStore(reducers, applyMiddleware(thunk));

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

export default store;
