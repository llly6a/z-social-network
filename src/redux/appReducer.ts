import { getAuthUserData } from "./authReducer";
import { AnyAction } from 'redux';
import { AppThunk } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action:AnyAction): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}



export const InitializedSuccess = ():InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS});

export const initializeApp = ():AppThunk => dispatch => {
    let promise = dispatch(getAuthUserData());
    //dispatch(somethingelse());
   Promise.all([promise]).then(() => {
       dispatch(InitializedSuccess())
    });
}

export default appReducer;