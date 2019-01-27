import axios from 'axios';
import actionTypes from '../action/actionTypes';

export function authCheck(token) {

    return axios.get('http://localhost:8081/api/auth/check?token=' + token);
}

export function authLogin(id, pw) {
    console.log('AUTH');
    const data = {
        id: id,
        pw: pw
    }
    // return (dispatch, getState) => {

    //     console.log('getState');
    //     // dispatch(setAuthenticated(false));
    //     // dispatch(setAuthenticating(true));
    //     return axios({
    //         method: 'post',
    //         url: 'http://localhost:8081/api/login',
    //         data: data
    //     }).then(data => {
    //         console.log(data);
            
    //         // dispatch(setAuthenticating(false));
    //         if(data.data.success) {
    //             console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
    //             localStorage.setItem('Ut', data.data.token);
    //             // console.log(dispatch());
    //         }

    //         return data;
    //     }, reason => {
    //         return reason;
    //     });
    // }

    return axios({
        method: 'post',
        url: 'http://localhost:8081/api/login',
        data: data
    }).then(data => {
        console.log(data);

        if(data.data.success) {
            sessionStorage.setItem('RESUMENT_TOKEN', data.data.token);
        }
    });
}

function setUserInfo(user) {

    const {
        id,
        name,
        gender
    } = user;

    return {
        type: actionTypes.AUTH_USER_INFO,
        id,
        name,
        gender
    }
}

function setAuthenticating(isAuthenticating) {
    console.log('CATING');
    return {
		type: actionTypes.AUTH_AUTHENTICATING,
        isAuthenticating
	};
}

function setAuthenticated(isAuthenticated) {
    return {
		type: actionTypes.AUTH_AUTHENTICATED,
        isAuthenticated
	};
}

function clearReducer() {
    return {
		type: actionTypes.AUTH_CLEAR_REDUCER
	};
}