import actionTypes from '../action/actionTypes';

const {
    AUTH_AUTHENTICATED,
    AUTH_AUTHENTICATING,
    AUTH_USER_INFO,
    AUTH_CLEAR_REDUCER
} = actionTypes;

const initialState = {
    id: null,
    name: null,
    gender: null,
    isAuthencated: false,
    isAuthencating: false,
}

export default function auth(state=initialState, action) {

    switch(action.type) {
        case AUTH_AUTHENTICATED:
            return Object.assign({}, state, {
                isAuthencated: action.isAuthencated
            });

        case AUTH_AUTHENTICATING:
            return Object.assign({}, state, {
                isAuthencating: action.isAuthencating
            });
        
        case AUTH_USER_INFO:
            return Object.assign({}, state, {
                id: action.id,
                name: action.name,
                gender: action.gender
            });

        case AUTH_CLEAR_REDUCER:
            return Object.assign({}, initialState);

        default:
            return state;
    }
}